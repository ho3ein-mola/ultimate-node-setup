import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import lodash from "lodash";
import mongoose from "mongoose";
import path from "path";

dotenv.config();

// local variables
const app = express();
const port = process.env.DEV_PORT || 3001;
const mod = process.env.APP_MOD || "dev";

// Express-session config
app.use(
  session({
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    secret: "conduit"
  })
);

// static folder
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// enable cross origin request
app.use(cors());

if (mod === "dev") {
  mongoose.connect("mongodb://localhost/");
}

app.listen(port, () => {
  console.log(`server started ate1 http://localhost:${port}`);
  console.log(`server started ate1 http://localhost:${port}`);
});
