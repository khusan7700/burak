// console.log("EXUCUTED");

// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Usman";
// const count: number = 100;

//---------------------------------------

// Architectural pattern: MVC, Dependency Injection, MVP

/* bizning backendimizning suyadgi 
yani bizni backendimizdagi malumotlar oqimini tartibga
soladigon bir vosita yani arxitukturasi hisoblanadi.
--insonni suyagi--
*/

// MVC = model view controller( juda ham muhum petterin asosal backendda ishlatiladi)

// Design pattern: Middlewate, Decotar

/* butun bir backend tizimini tartibga soluvgi vositachi
sifatida emas balki malum bir bolaklarini strukturasini
 yechada hizmat ko'rsatadigon petternlar hisoblanadi. 
 malum bir vazifani bajaradigon qism
 --qol suyagi--*/
//---------------------------36 dars--------------------------------------

// import moment from 'moment'; // commonjs da yozilishiconst moment = require ('moment);

import dotenv from "dotenv";
dotenv.config();

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);

//cluster => database => collection => document (mongodb)

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDB connection secceed");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
