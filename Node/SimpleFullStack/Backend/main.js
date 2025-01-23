const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")


app.use(bodyParser.json())
app.use(cors())
dotenv.config()


app.get("/", (req, res) => {
    res.send("Welcome Node! ")
})

app.listen(3000, () => {
    console.log("Server 3000 portunda işləyir.");
});