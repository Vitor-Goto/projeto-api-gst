//"start": "json-server --watch db.json --port 4001",
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

//DB connection!

const connection = require("./db/connection")

connection()

//Routes
const routes = require("./routes/router")
app.use("/api", routes)

app.listen(6001, () => {
  console.log("o servidor esta funcionando")
})

//ZW0GnLDL69wRmyQT
