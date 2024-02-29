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

export default restaurantController;
