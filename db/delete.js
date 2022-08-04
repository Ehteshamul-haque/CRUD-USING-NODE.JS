const dbConnect = require("./connect")

const deleteCollection = async () => {
    const db = await dbConnect()
    const result = await db.deleteMany({name: 'Abul Hoze'})
    if(result.acknowledged){
        if(result.deletedCount !== 0){
            console.log("Data Deleted")
        }else {
            console.log("Data not find")
        }
        
    }
}

deleteCollection()