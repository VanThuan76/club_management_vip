import express from "express";
import { login, register } from "../controllers/Auth/AuthController";
import { authenticateToken } from "../middleware/jwtMiddleware";
import { checkRoleAdmin, checkRoleStaff } from "../middleware/checkRole";
import { listUser, getUserById, updateUser, deleteUser } from "../controllers/Admin/UserController";
import { listUserByStaff, getUserByIdByStaff } from "../controllers/Staff/UserController";
const router = express.Router();
//Auth
router.post("/api/login", login);
router.post("/api/register", register);
//Admin
    //User
    router.get("/api/admin/users", authenticateToken, checkRoleAdmin, listUser);
    router.get("/api/admin/users/:id", authenticateToken, checkRoleAdmin, getUserById);
    router.put("/api/admin/users/:id", authenticateToken, checkRoleAdmin, updateUser);
    router.delete("/api/admin/users/:id", authenticateToken, checkRoleAdmin, deleteUser);
//Staff
     //User
     router.get("/api/staff/users", authenticateToken, checkRoleStaff, listUserByStaff);
     router.get("/api/staff/users/:id", authenticateToken, checkRoleStaff, getUserByIdByStaff);
export default router;
