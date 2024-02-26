import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.goHome);

routerAdmin.get("/signup", restaurantController.getSignup);

export default routerAdmin;
