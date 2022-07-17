import { Router } from "express";
import { performLogin, createUser } from "../controllers/credentials.controller.js";

const router = Router();

//POST
router.post("/auth/login", performLogin);
router.post("/auth/create", createUser);

//GET
router.get("/", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

export default router;
