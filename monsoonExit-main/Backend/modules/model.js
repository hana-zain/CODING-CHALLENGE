//Write missing codes here
var mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
var BlogModel = mongoose.model("blog", schema);
module.exports = BlogModel;


