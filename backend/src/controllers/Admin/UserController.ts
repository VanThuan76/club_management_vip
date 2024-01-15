import { Request, Response } from "express";
import * as dotenv from "dotenv";
import {
  GeneralResponse,
  commonResponse,
} from "../../utilities/CommonResponse";
import { UserAttributes, User } from "../../models/user";
dotenv.config();

export const listUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.findAll();
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

export const getUserById = async (
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

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      const response: GeneralResponse<{}> = {
        status: 400,
        data: null,
        message: "User not found",
      };
      commonResponse(req, res, response);
      return;
    } else {
      const body = req.body;
      const result = await user.update(body);
      const response: GeneralResponse<UserAttributes> = {
        status: 200,
        data: result.toJSON() as UserAttributes,
        message: "Update successfull",
      };
      commonResponse(req, res, response);
    }
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
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      const body = {
        status: 1,
      };
      user.update(body);
    } else {
      const response: GeneralResponse<{}> = {
        status: 400,
        data: null,
        message: "User not found",
      };
      commonResponse(req, res, response);
      return;
    }
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
