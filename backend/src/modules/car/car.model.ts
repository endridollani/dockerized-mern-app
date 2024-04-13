import CarSchema from "./car.schema";
import db, { DATABASE_NAME } from '../../db';

export const CarModel = db.connection.useDb(DATABASE_NAME).model("car", CarSchema);