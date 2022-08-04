const express = require("express")
// const mongodb = require("mongodb")
require('./connect')
const Person = require('./person')

const app = express()
app.use(express.json())

app.get("/search/:key", async (req,res) => {
    const key = req.params.key
    const data = await Person.find({
        "$or": [
            {"name": {$regex:key}}
        ]
    })
    console.log(data)
    res.send(data)
})

app.listen(3000, () => console.log("Server is running on Port 3000"))