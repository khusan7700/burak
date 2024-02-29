import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    //LOGIC
    //servise model
    //...
    //res.send | json | rediract | end | render ==> respons turlari
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.gologin = (req: Request, res: Response) => {
  try {
    console.log("gologin");

    res.send("Login Page");
  } catch (err) {
    console.log("Error, GetLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");

    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

restaurantController.processlogin = (req: Request, res: Response) => {
  try {
    console.log("processlogin");

    res.send("DONE");
  } catch (err) {
    console.log("Error, processlogin:", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    res.send("DONE");
  } catch (err) {
    console.log("Error, processSignup:", err);
  }
};
export default restaurantController;
