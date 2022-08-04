const {MongoClient} = require("mongodb")

const url = "mongodb://127.0.0.1:27017"
const database = 'person'
const client = new MongoClient(url)

const dbConnect = async () => {
    let result = await client.connect()
    let db = result.db(database)
    return collection = db.collection('people')
    // let response = await collection.find({}).toArray()
    // console.log(response)
}

module.exports = dbConnect
