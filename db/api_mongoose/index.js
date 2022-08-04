const express = require("express")
const mongodb = require("mongodb")
require('./connect')
const Person = require('./person')

const app = express()
app.use(express.json())

// C  R  E  A  T  E -- POST API
app.post("/create", async (req,res) => {
    const data = new Person(req.body)
    const result = await data.save()
    res.send("Working")
})
// R  E  A  D  -- GET API
app.get("/list", async (req,res) => {
    const data = await Person.find()
    res.send(data)
  
})
// D  E  L  E  T  E -- DELETE API
app.delete("/delete/:_id", async (req,res) => {
    // const data = await Person.deleteOne({
    //     _id: new mongodb.ObjectId(req.params.id)
    // }) -- in mongoDB
    const data = await Person.deleteOne(req.params) // -- in mongoose
    res.send("Deleted")
})
// U  P  D  A  T  E  -- UPDATE API
app.put("/update/:_id", async (req,res) => {
    const data = await Person.updateOne(req.params, { $set: req.body })
    console.log(data)
    res.send("Updated")
})
app.listen(3000, () => console.log("Server is running on Port 3000"))