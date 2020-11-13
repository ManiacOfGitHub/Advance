var express = require("express");
var app = express();
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/web/index.html");
});

var listener = app.listen(3000, () => {
    console.log("The server is listening on port " + listener.address().port);
})
