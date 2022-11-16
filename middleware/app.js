const app = require("express")()

function middleware1(req, res, next) { 
    console.log("I am the first middle ware")
    const errorObj = new Error("I am an Error")
    let i = Math.round(Math.random() * 2)
    i == 1 ? next(errorHandler) : next()
    
 }
function errorHandler(err, req, res, next) {
    if (err) {
        console.log("There is an error")
        res.send("<h1>There is an error</h1>")
        
    } 
 }
// function middleware2(req, res, next) { 
//     console.log("I am the second middle ware")
    
//     next()
//  }

app.use(middleware1)

app.get("/",(req, res, next) => {
    console.log("There is no error")
    
    res.send("<h1>Hello there</h1>")
})
app.use(errorHandler)
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on Port 3000!")
})
