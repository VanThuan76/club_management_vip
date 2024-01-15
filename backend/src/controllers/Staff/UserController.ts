import { Request, Response } from "express";
import * as dotenv from "dotenv";
import {
  GeneralResponse,
  commonResponse,
} from "../../utilities/CommonResponse";
import { UserAttributes, User } from "../../models/user";
import { Op } from "sequelize";
dotenv.config();

export const listUserByStaff = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.findAll({
      where: {
        role_id: {
          [Op.notIn]: [1, 2],
        },
        status: 0,
      },
    });
    const response: GeneralResponse<{ users: UserAttributes[] }> = {
      status: 200,
      data: { users },
      message: "Get list users successfully",
    };
    commonResponse(req, res, response);
  } catch (error: any) {
    console.error(error);
    const response: GeneralResponse<{}> = {
      status: 400,
      data: null,
      message: error.message,
    };
    commonResponse(req, res, response);
  }
};

export const getUserByIdByStaff = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId: string = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      const response: GeneralResponse<{}> = {
        status: 404,
        data: null,
        message: "User not found",
      };
      commonResponse(req, res, response);
      return;
    }

    const response: GeneralResponse<UserAttributes> = {
      status: 200,
      data: user,
      message: "Get user by ID successfully",
    };
    commonResponse(req, res, response);
  } catch (error: any) {
    console.error(error);
    const response: GeneralResponse<{}> = {
      status: 400,
      data: null,
      message: error.message,
    };
    commonResponse(req, res, response);
  }
};
