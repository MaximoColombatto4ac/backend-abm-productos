import { Router } from "express";
import {status, login, register, logout, verify} from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.get('/', status)
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout",logout);
router.get("/verify", verify)


export default router;