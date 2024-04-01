import CarSchema from "./car.schema";
import connection from "../../db/connection";


export const CarModel = connection.model("car", CarSchema);