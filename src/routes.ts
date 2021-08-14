import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();

const userController = new UserController();

router.post("/users", userController.create)


