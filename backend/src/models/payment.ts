import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

export interface PaymentAttributes {
  id: number;
  user_id: number;
  service_id: number;
  creator_id: number;
  price: number;
  type: number;
  created_at: Date;
  updated_at: Date;
}
interface PaymentCreationAttributes extends Optional<PaymentAttributes, "id"> {}

class Payment
  extends Model<PaymentAttributes, PaymentCreationAttributes>
  implements PaymentAttributes
{
  public id!: number;
  public user_id!: number;
  public service_id!: number;
  public creator_id!: number;
  public price!: number;
  public type!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

Payment.init(
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
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
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
    tableName: "payment",
    sequelize: sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export { Payment };
