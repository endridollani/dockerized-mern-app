import db from "./";

const connection = db.connection.useDb("my-db");

export default connection;