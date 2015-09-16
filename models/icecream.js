var mongoose = require("mongoose");

var icecreamSchema = new mongoose.Schema({
                    name: { type: String, required: true, trim: true },
                    description: String,
                    imageUrl: String
                });

var Icecream = mongoose.model("icecream", icecreamSchema);

module.exports = Icecream;
