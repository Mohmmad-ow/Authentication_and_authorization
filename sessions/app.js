const app = require("express")()
const mongoose = require("mongoose")
const session = require("express-session")



mongoose.connect("mongodb://localhost:27017/test");

const Cat = mongoose.model('Cat', {name: String});


const kitty = new Cat({name: "my Cat"}).save()