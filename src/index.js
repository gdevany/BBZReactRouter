import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import couponRoutes from "./routes/CouponRoutes";

const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/checkpoint2");
mongoose.connect("mongodb://gdevany:gdevany@ds133964.mlab.com:33964/bogobyzip");


app.use(bodyParser.json());
app.use(couponRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
