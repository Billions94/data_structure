import { Express } from 'express';
export declare class App {
    private server;
    private port;
    private database;
    constructor(server: Express);
    private activateControllers;
}
