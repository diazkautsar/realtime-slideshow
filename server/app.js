const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')

app.use(cors())

app.get('/', function(req, res){
    console.log('masuuk');
});

io.on('connection', function(socket){
    socket.on('hay', (payload) => {
        payload++
        io.emit('hay', payload)
    })
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});