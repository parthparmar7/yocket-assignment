
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SocietySchema = new Schema({
  title: String,
  description: String
});

var Society = mongoose.model("society", SocietySchema);
module.exports = Society;