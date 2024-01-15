import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

export interface ServiceAttributes {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  from_at: Date;
  to_at: Date;
  created_at: Date;
  updated_at: Date;
}
interface ServiceCreationAttributes extends Optional<ServiceAttributes, "id"> {}

class Service
  extends Model<ServiceAttributes, ServiceCreationAttributes>
  implements ServiceAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public price!: number;
  public discount!: number;
  public from_at!: Date;
  public to_at!: Date;
  public created_at!: Date;
  public updated_at!: Date;
}

Service.init(
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
    description: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: new DataTypes.STRING(1045),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    from_at: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    to_at: {
      type: DataTypes.DATE(),
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
    tableName: "service",
    sequelize: sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export { Service };
