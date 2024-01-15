import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";

declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}

export const checkRoleAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRoleId = req.user?.role_id;
  if (userRoleId !== 1) {
    return res
      .status(403)
      .json({ message: "Access denied. User is not a Admin." });
  }
  next();
};

export const checkRoleStaff = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userRoleId = req.user?.role_id;
    if (userRoleId !== 2) {
      return res
        .status(403)
        .json({ message: "Access denied. User is not a Staff." });
    }
    next();
  };
