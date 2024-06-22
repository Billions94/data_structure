"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const database_js_1 = require("db/database.js");
class App {
    constructor(server) {
        this.port = parseInt(`${process.env.PORT}`) || 3001;
        this.server = server;
        this.database = (0, database_js_1.createDatabase)();
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
    activateControllers(method, route) {
        switch (method) {
            case 'post':
                this.server[method](route, (req, res) => {
                    res.status(200).json({
                        message: 'Post request received',
                    });
                });
                break;
            case 'put':
                this.server[method](route, (req, res) => {
                    res.status(200).json({
                        message: 'Put request received',
                    });
                });
                break;
            case 'delete':
                this.server[method](route, (req, res) => {
                    res.status(200).json({
                        message: 'Delete request received',
                    });
                });
                break;
            case 'get':
                this.server[method](route, (req, res) => {
                    res.status(200).json({
                        message: 'Get request received',
                    });
                });
                break;
            default:
        }
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map