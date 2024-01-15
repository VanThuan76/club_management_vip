import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { User, UserAttributes } from "../../models/user";
import {
  GeneralResponse,
  commonResponse,
} from "../../utilities/CommonResponse";
dotenv.config();
const secretKey = process.env.SECRETKEY as string;

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const account = await User.findOne({
      where: {
        username,
        password,
        status: 0,
      },
    });
    if (account) {
      const user = account.toJSON();
      const token = jwt.sign(user, secretKey);
      const response: GeneralResponse<{ token: string }> = {
        status: 200,
        data: { token },
        message: "Success: User logged in successfully!",
      };
      commonResponse(req, res, response);
    } else {
      const response: GeneralResponse<null> = {
        status: 401,
        message: "Invalid username or password",
      };
      commonResponse(req, res, response);
    }
  } catch (error) {
    console.error(error);
    const response: GeneralResponse<null> = {
      status: 500,
      message: "Internal server error",
    };
    commonResponse(req, res, response);
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      username,
      password,
      name,
      email,
      phone,
      gender,
      birthday,
      address,
    } = req.body;
    const existingAccount = await User.findOne({
      where: { username },
    });
    if (existingAccount) {
      res.status(400).json({ message: "Account already exists!" });
      return;
    }
    const user = await User.create({
      username,
      password,
      role_id: 1,
      name,
      email,
      phone,
      gender,
      birthday,
      address,
      avatar: "",
      status: 0,
      created_at: new Date(),
      updated_at: new Date(),
    });
    if (user) {
      const response: GeneralResponse<{ user: UserAttributes }> = {
        status: 200,
        data: { user },
        message: "Success: Register in successfully!",
      };
      commonResponse(req, res, response);
    } else {
      const response: GeneralResponse<null> = {
        status: 401,
        message: "Invalid something or email exits",
      };
      commonResponse(req, res, response);
    }
  } catch (error) {
    console.error(error);
    const response: GeneralResponse<null> = {
      status: 500,
      message: "Internal server error",
    };
    commonResponse(req, res, response);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, passwordOld, passwordNew } = req.body;

    if (!passwordOld || !passwordNew) {
      const response: GeneralResponse<{}> = {
        status: 400,
        data: null,
        message: "Password field is required!",
      };
      commonResponse(req, res, response);
      return;
    }
    try {
      const user = await User.findOne({ where: { email: email, status: 0 } });
      if (user) {
        const checkPassword = await User.findOne({
          where: { password: passwordOld },
        });
        if (checkPassword) {
          user.password = passwordNew;
          await user.save();
        } else {
          throw new Error("Password old not correct");
        }
      } else {
        throw new Error("Account not found");
      }
    } catch (error) {
      throw new Error("Unable to update password");
    }
    const response: GeneralResponse<{}> = {
      status: 200,
      data: null,
      message: "Password updated successfully!",
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
