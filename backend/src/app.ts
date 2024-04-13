import expres from "express";
import cors from "cors";
import http from "http";
import compression from "compression";
import bodyParser from "body-parser";
import logger from "./common/logger";
import router from "./router";
import db from "./db";


export default class App {
    private static PORT: number = 8080;
    private app: expres.Express;

    constructor(){
        this.app = expres();
        this.app.use(cors({credentials: true}));
        this.app.use(compression());
        this.app.use(bodyParser.json());
    }


    async init(){
        try {
            await this.initConnection();
            await this.initServer();
            this.initRouter();
            console.log("App is up and running!");
        } catch(e) {
            console.log("App failed with error: ", e)
        }
    }

    protected async initConnection(){
        logger("Connecting with mongo...");
        try {
            db.Promise = Promise;
            db.connect("mongodb://mongodb:27017");
            db.connection.on("connected", () => {
                logger("Connected successfully to mongo!");
            });
            db.connection.on("disconnected", () => logger("Connection with mongo failed!"));
        } catch (e) {
            logger(`Connection with mongo failed with error: \n${e}`);
        }
    }

    protected async initServer(){
        console.log("Initing server...");
        try {
            const server = http.createServer(this.app);
            server.listen(App.PORT, () => console.log(`Server is running on port: ${App.PORT}`));
        }catch (e) {
            console.log(`Error running server on port ${App.PORT}. \n${e}`);
        }
    }

    protected initRouter(){
        logger("Router Inited");
        this.app.use("/", router());
    }
}
