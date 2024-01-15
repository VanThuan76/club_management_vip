import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

export interface ServiceUserAttributes {
  id: number;
  service_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
interface ServiceUserCreationAttributes
  extends Optional<ServiceUserAttributes, "id"> {}

class ServiceUser
  extends Model<ServiceUserAttributes, ServiceUserCreationAttributes>
  implements ServiceUserAttributes
{
  public id!: number;
  public service_id!: number;
  public user_id!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

ServiceUser.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
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
    tableName: "service_user",
    sequelize: sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export { ServiceUser };
