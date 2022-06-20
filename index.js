var express = require('express');
var app = express();
var port = 8001;
app.listen(port, function() {
    console.log('App listing as http://localhost:', port);
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html'); //안에 있던 내용을 지우고 현재처럼 추가합니다. 
})

