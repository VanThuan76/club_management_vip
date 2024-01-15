import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

export interface ScheduleAttributes {
  id: number;
  user_id: number;
  service_id: number;
  date: Date;
  book_at: Date;
  status: number;
  created_at: Date;
  updated_at: Date;
}
interface ScheduleCreationAttributes
  extends Optional<ScheduleAttributes, "id"> {}

class Schedule
  extends Model<ScheduleAttributes, ScheduleCreationAttributes>
  implements ScheduleAttributes
{
  public id!: number;
  public user_id!: number;
  public service_id!: number;
  public date!: Date;
  public book_at!: Date;
  public status!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    book_at: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
  },
  {
    tableName: "schedule",
    sequelize: sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export { Schedule };
