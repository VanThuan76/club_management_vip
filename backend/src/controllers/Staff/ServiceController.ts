import { Request, Response } from "express";
import * as dotenv from "dotenv";
import {
  GeneralResponse,
  commonResponse,
} from "../../utilities/CommonResponse";
import { Service, ServiceAttributes } from "../../models/service";
dotenv.config();

export const listService = async (req: Request, res: Response): Promise<void> => {
  try {
    const services = await Service.findAll();
    const response: GeneralResponse<{ services: ServiceAttributes[] }> = {
      status: 200,
      data: { services },
      message: "Get list services successfully",
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