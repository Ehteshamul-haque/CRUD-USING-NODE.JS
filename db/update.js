const dbConnect = require("./connect");

const updateCollection = async () => {
  const db = await dbConnect();
  const result = await db.updateOne(
    { name: "John Doe" },
    {
      $set: { name: "Abul Hoze" },
    }
  );
  if (result.acknowledged) console.log("Data Updated");
};

updateCollection();
