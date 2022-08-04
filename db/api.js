const express = require("express")
const mongodb = require("mongodb")
const dbConnect = require('./connect')
// const bodyParser = require("body-parser")
const app = express()
// Middleware for to get POST API -- alternative body-parser
app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())


// const readDB = async () => {
//     const db = await dbConnect()
//     const data = await db.find().toArray()
//     return data
// }
// G  E  T  -  A  P  I
app.get('/', async (req,res) => {
    // const data = await readDB() 
    // res.send(data)
    //getting the collection of person db via MongoDb connection
    const db = await dbConnect()
    const data = await db.find().toArray()
    res.send(data)
})
// ------------------------------------------------------
// P  O  S  T  -  A  P  I
app.post('/', async (req,res) => {
    const db = await dbConnect()
    const insert = await db.insertOne(req.body)
    res.send("Data Inserted")
})
// ------------------------------------------------------
// P  U  T  -  A  P  I
app.put("/:name", async (req,res) => {
    const db = await dbConnect()
    const update = await db.updateOne(
        {name: req.params.name},
        {$set: req.body}
        )
    res.send("Data Updated Successfully")
})
// ------------------------------------------------------
// D  E  L  E  T  E  -  A  P  I
app.delete("/:id", async (req,res) => {
    const db = await dbConnect()
    const deleted = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    console.log(deleted)
    res.send("Deleted")
})

app.listen(3000, () => console.log("Server is running on Port 3000"))