const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/1-express");

const User = require('./app/models/UserModel')

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");


const usersRouter = require("./app/router/userRouter");





app.get("/users", usersRouter);

app.listen(8800, function () {
  console.log('Serwer działa');
});