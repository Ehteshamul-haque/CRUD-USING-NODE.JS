const dbConnect = require("./connect")

const readCollection = async () => {
    const db = await dbConnect()
    // const result = await db.insertOne({name: 'Mohit', age: 57})
    const result = await db.insertMany([
        {name: 'Karan', age:25},
        {name: 'Shiv', age:55},
        {name: 'Irfan', age:34},
        {name: 'Hussain', age:29}
    ])
    if(result.acknowledged){
        console.log('Data inserted')
    }
}

readCollection()