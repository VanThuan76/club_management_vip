import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

export interface RoleAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
interface RoleCreationAttributes extends Optional<RoleAttributes, "id"> {}

class Role
  extends Model<RoleAttributes, RoleCreationAttributes>
  implements RoleAttributes
{
  public id!: number;
  public name!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(255),
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
    tableName: "role",
    sequelize: sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export { Role };
