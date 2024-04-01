import expres from "express";
import cors from "cors";
import http from "http";
import compression from "compression";
import bodyParser from "body-parser";
import router from "./router";
import logger from "./common/logger";
import db from "./db";


const app = expres();

app.use(cors({credentials: true}));

app.use(compression());

app.use(bodyParser.json());

const PORT = 8080;

const connectDb = async () => {
    logger("Connecting with mongo...");
    try {
        db.Promise = Promise;
        db.connect("mongodb://localhost:27017");
        db.connection.on("connected", () => {
            logger("Connected successfully to mongo!");
        });
        db.connection.on("disconnected", () => logger("Connection with mongo failed!"));
    } catch (e) {
        logger(`Connection with mongo failed with error: \n${e}`);
    }

}

const initServer = async () => {
    console.log("Initing server...");
    try {
        const server = http.createServer(app);
        server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    }catch (e) {
        console.log(`Error running server on port ${PORT}. \n${e}`);
    }
}

initServer()
.then(() => connectDb())
.then(() => {
   logger("Router Inited");
    app.use("/", router())
});
