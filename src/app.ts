import cors from 'cors';
import express, { Express } from 'express';
import listEndpoints from 'express-list-endpoints';
import { createDatabase, Database } from './db/database';
import { User } from './stack/funcs';

const server = express();

export class App {
  private server: Express;
  private port: number = parseInt(`${process.env.PORT}`) || 3001;
  private database: Database<User>;

  constructor(server: Express) {
    this.server = server;
    this.server.use(cors());
    this.server.use(express.json());
    this.database = createDatabase();
    this.database.init();
    this.activateControllers('get', '/users');
    this.activateControllers('get', '/users/:id');
    this.activateControllers('post', '/users');
    this.activateControllers('patch', '/users/:id');
    this.activateControllers('delete', '/users/:id');
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
    console.table(listEndpoints(server));
  }

  private activateControllers(
    method: 'post' | 'patch' | 'delete' | 'get',
    route: string
  ) {
    switch (method) {
      case 'post':
        this.server[method](route, ({ body }, res) => {
          try {
            const user = this.database.set({ ...body });

            return res.send({
              message: 'New database resource created',
              user,
            });
          } catch ({ message }) {
            return res.send({ message });
          }
        });
        break;
      case 'get':
        this.server[method](route, ({ params }, res) => {
          try {
            return params.id
              ? res.send(this.database.get(parseInt(params.id)))
              : res.send(this.database.getAll());
          } catch ({ message }) {
            return res.send({ message });
          }
        });
        break;
      case 'patch':
        this.server[method](route, ({ body, params }, res) => {
          try {
            const user = this.database.get(parseInt(params.id));

            return res.send(
              this.database.update({
                ...user,
                ...body,
                id: params.id,
              })
            );
          } catch ({ message }) {
            return res.send({ message });
          }
        });

        break;
      case 'delete':
        this.server[method](route, ({ params }, res) => {
          try {
            let status;

            console.log(this.database.get(parseInt(params.id)));

            if (this.database.get(parseInt(params.id))) {
              this.database.delete(parseInt(params.id));
              status = true;
              res.status(203).json({
                message: 'Delete request received',
                status,
              });
            } else status = false;
            res.send({
              message: 'User with id: ' + params.id + ' not found',
              status,
            });
          } catch ({ message }) {
            return res.send({ message });
          }
        });
        break;
      default:
    }
  }
}

new App(server);
