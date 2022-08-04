const dbConnect = require('./connect')

//Using promise .then
// dbConnect().then((res) => res.find().toArray()
//             .then(data => console.log(data)))

//Using asyn/await
const readCollection = async () => {
    const response = await dbConnect()
    const data = await response.find().toArray()
    console.log(data)
}

readCollection()
