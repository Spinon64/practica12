var express = require ("express");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", function (req, res, next){
    console.log("Request URL:" + req.url);
    next();
});
app.get("/", function (req, res){ 
    res.render("index");
});

app.get("/person/:id", function (req, res){
    res.render("person", { ID: req.params.id});
});

app.get("/api", function (req, res ) {
    res.json({ firstname: "John", lastname: "Doe"});
});

app.listen(port);

// <html><head><link href=assets/style.css type=text/css rel/stylesheet /></head><body><h1>Hello World</h1></body></html>
// "<html><head></head><body><h1>Person: " + req.params.id + "</h1></body></html>"