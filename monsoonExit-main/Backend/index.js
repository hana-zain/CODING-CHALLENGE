const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here
var BlogModel=require("./modules/model");
require("./connection");


//Write your POST API here
app.post("/add", async (req, res) => {
  try{
    await BlogModel(req.body).save();
    res.send({message: "Data inserted"});

  }
  catch(error){
    console.log(error);
  }
});



app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/remove/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Data deleted" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
