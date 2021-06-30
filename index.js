const express = require("express");
const app = express();
const path=require("path");

app.listen(process.env.PORT || 3000, function(){ console.log("Server Start","http://localhost:2100")});

app.use(express.static(path.join(__dirname,"./public")));

const home = require("./src/routes/home");
app.use(home);

const login = require("./src/routes/login");
app.use(login);

const register = require("./src/routes/register");
app.use(register);