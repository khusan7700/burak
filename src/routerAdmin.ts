import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.gologin)
  .post("/login", restaurantController.processlogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/** Product */

/** User */

export default routerAdmin;
