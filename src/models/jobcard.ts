// models/jobcard.ts

import { Model, DataTypes } from "../../deps.ts";
import db from "../helpers/database.ts";

class JobCard extends Model {
  static table = "jobcards";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    state: DataTypes.STRING,
    workstationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
}

// JobCard.init(db);
// db.link([JobCard]);

export default JobCard;
