import express from "express";
import userController from "../controllers/user.js";
import {isLoggedIn, isSelf} from "../middlewares/auth.js";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", isLoggedIn, userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", isLoggedIn, isSelf, userController.updateUser);
router.delete("/:id", isLoggedIn, isSelf, userController.deleteUser);
router.post("/login", userController.login);
router.post("/contact", userController.contact);

export default router;