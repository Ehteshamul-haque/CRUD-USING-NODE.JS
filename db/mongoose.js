const mongoose = require("mongoose");

mongoose.connect();
const productSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
// C  R  E  A  T  E
const saveInDB = async () => {
  const productModel = new mongoose.model("people", productSchema);
  let data = new productModel({ name: "Rossel", age: 31 });
  const result = await data.save();
  console.log(result);
};
// U  P  D  A  T  E
const updateInDB = async () => {
  const people = new mongoose.model("peoples", productSchema);
  let data = await people.updateOne(
    { name: "Rossel" }, 
    { $set: { age: 18 } 
});
console.log(data)
};
// D  E  L  E  T  E
const deleteInDB = async () => {
    const people = new mongoose.model("peoples",productSchema)
    let data = await people.deleteOne({name: "Rossel"})
    console.log(data)
}
// R  E  A  D || F  I  N  D
const findInDB = async () => {
    const people = new mongoose.model("peoples", productSchema)
    let data = await people.find() // Read || Find -- All
    // let data = await people.find({name: "Divine"}) // Individual
    console.log(data)
}
findInDB()