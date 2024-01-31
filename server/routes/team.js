import express from "express";
import teamController from "../controllers/team.js";
import {isLoggedIn, isSelf} from "../middlewares/auth.js";

const router = express.Router();

router.get("/", teamController.getTeams);
router.get("/:id", isLoggedIn, teamController.getTeam);
router.post("/", teamController.createTeam);
router.put("/:id", isLoggedIn, isSelf, teamController.updateTeam);
router.delete("/:id", isLoggedIn, isSelf, teamController.deleteTeam);

export default router;