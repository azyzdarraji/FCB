// Create Server And Connecting Application With MongoDB Database
const mysql = require("mysql");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const AuthRoute = require("./routes/Authentification");
require("dotenv").config();
const cnx = require("./database/connecter");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

app.listen(3001, () => {
    console.log(`Listening to Localhost ${PORT}`);
});
app.use(AuthRoute);
