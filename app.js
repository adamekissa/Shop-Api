//Import express module for server  
import express  from "express";
//Import pg for connecting to postgress on Heroku

//Import Path
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
const app = express();
const PORT = 3000;

import homeRouter from "./Routes/home.js";
import usersRouter from "./Routes/users.js";

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/home", homeRouter );
app.use("/users", usersRouter);

//Middleware
app.use(express.json());


app.get("/", function(req, res){
    let greeting = "Welcome to the root!";
    res.json({Payload: greeting});
})

app.listen(PORT, function(req, res){
    console.log(`Listening on Port ${PORT}`);
})

export default app;