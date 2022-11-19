const mongoose = require("mongoose")
const session = require("express-session")
const bodyParser = require("body-parser")


const MongoStore = require('connect-mongo');


const app = require("express")()
app.use(bodyParser.urlencoded({extended: true}))

const dbString = 'mongodb://localhost:27017/test'
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost/test');

app.use(session({
    secret: "something secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: 'mongodb://localhost/test',
        mongoOptions: dbOptions
     }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.get('/', (req, res, next) => {
    
    if (req.session.visitCount) {
        req.session.visitCount++
    } else {
        req.session.visitCount = 1
    }
    res.send(`you've visited this website for ${req.session.visitCount}`)
})

app.listen(3000, () => {
    console.log("Server running on port 3000!")
})