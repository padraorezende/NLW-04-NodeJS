import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveysRepository } from "./repositories/SurveysRepository";

export const router = Router();

const userController = new UserController();
const surveysController = new SurveysRepository();

router.post("/users", userController.create)
router.post("/surveys", surveysController.create)


