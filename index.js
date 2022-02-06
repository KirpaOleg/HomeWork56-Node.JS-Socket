const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = '3000';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => { 

  socket.on('input value', () => {
    console.count(`User id >>> ${socket.id}`);
  });

});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});