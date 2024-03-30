import expres from "express";
import cors from "cors";
import http from "http";
import compression from "compression";
import bodyParser from "body-parser";

const app = expres();

app.use(cors({credentials: true}));

app.use(compression());

app.use(bodyParser.json());

const initServer = async () => {
    console.log("Initing server...");
    try {
        const server = http.createServer(app);
        server.listen(8080, () => console.log("Server is running on port: 3000"));
    }catch (e) {
        console.log(`Error running server on port 3000. \n${e}`);
    }
}

initServer();
