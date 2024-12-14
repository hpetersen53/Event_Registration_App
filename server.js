const express = require('express');
const app = express()


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))
app.use(express.json());



const registrationsRouter = require("./api/registrations")
const registerRouter = require("./api/register")

app.use("/registrations", registrationsRouter)
app.use("/register", registerRouter)

app.use('/', express.static('views'));

app.listen(3000)