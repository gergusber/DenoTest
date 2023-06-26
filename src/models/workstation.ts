// modules/workstation.ts

import { Model, DataTypes } from "../../deps.ts";
import db from "../helpers/database.ts";

class Workstation extends Model {
  static table = "workstations";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
  };
}

// Workstation._database(db);
// db.link([Workstation]);

export default Workstation;
