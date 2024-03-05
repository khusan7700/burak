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

// import moment from 'moment'; // commonjs da yozilishiconst moment = require ('moment);

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDB connection secceed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.info(` The server is running successfully on pory: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
