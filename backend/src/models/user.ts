import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

export interface UserAttributes {
  id: number;
  role_id?: number | null;
  email: string;
  username: string;
  password: string;
  name: string;
  address: string;
  avatar: string;
  phone: string;
  gender: number;
  birthday: Date;
  status: number;
  created_at: Date;
  updated_at: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public role_id!: number | null;
  public username!: string;
  public password!: string;
  public name!: string;
  public email!: string;
  public phone!: string;
  public gender!: number;
  public birthday!: Date;
  public address!: string;
  public avatar!: string;
  public status!: number;
  public created_at!: Date;
  public updated_at!: Date;
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    role_id: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    password: {
      type: new DataTypes.STRING(1045),
      allowNull: true,
    },
    name: {
      type: new DataTypes.STRING(45),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: new DataTypes.STRING(45),
      allowNull: true,
    },
    gender: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
    },
    birthday: {
      type: new DataTypes.DATE(),
      allowNull: true,
    },
    address: {
      type: new DataTypes.STRING(1045),
      allowNull: true,
    },
    avatar: {
      type: new DataTypes.STRING(1045),
      allowNull: true,
    },
    status: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
    },
    created_at: {
      type: new DataTypes.DATE(),
      allowNull: true,
    },
    updated_at: {
      type: new DataTypes.DATE(),
      allowNull: true,
    },
  },
  {
    tableName: "user",
    sequelize: sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
export { User };
