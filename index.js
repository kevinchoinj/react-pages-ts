const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
let socket = require('socket.io');

/*======================================
=               SERVER                 =
======================================*/

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*======================================
=           SOCKET IO           =
======================================*/
const server = require('http').createServer(app);
const io = socket(server);

io.on('connect', (socket) => {
  socket.emit('connect', 'connected message');
  io.emit('userConnected', 'user has connected');
  socket.on('disconnect', function(){
    io.emit('userDisconnected', 'user has disconnected');
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

app.post('/api/v1/message', (req, res)=>{
  io.emit('newmessage', req.body.message);
  res.status(200).send('message successfully sent');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const port = process.env.PORT || 1503;

server.listen(port, function(){
  console.log(`server is running on port ${port}`)
})
