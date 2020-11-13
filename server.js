var express = require("express");
var app = express();
var server = require('http').createServer(app)
var io = require("socket.io")(server);

app.use("/", express.static(__dirname + "/web/js"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/web/index.html");
});

io.on("connection", (socket) => {
    socket.on("test", (data) => {
        console.log(data);
    })
});
var listener = server.listen(3000, () => {
    console.log("The server is listening on port " + listener.address().port);
})
