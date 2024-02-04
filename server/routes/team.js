import express from "express";
import teamController from "../controllers/team.js";
import {isLoggedIn, isSelf} from "../middlewares/auth.js";

const router = express.Router();

router.get("/", isLoggedIn, teamController.getTeams);
router.get("/:id", isLoggedIn, teamController.getTeam);
router.post("/", teamController.createTeam);
router.put("/:id", isLoggedIn, isSelf, teamController.updateTeam);
router.delete("/:id", isLoggedIn, isSelf, teamController.deleteTeam);
router.put("/presence/:id", isLoggedIn, teamController.updateTeamPresence);
router.put("/payment/:id", isLoggedIn, teamController.updateTeamPayment);

export default router;