const express = require('express');
const app = express();
const cors = require('cors');
const PORT = '3000';
const io = require('socket.io')();

var corsOptions = {
     origin: 'http://localhost',
     optionsSuccessStatus: 200
   }

const server = require('http').createServer(app);

app.use(express.static('./public'));

app.get('/', cors(corsOptions), (req , res) => {
     res.json({status: '200', response:'success'});
});

server.listen(PORT, () => {
     console.log('Escuchando en ' + PORT);
});


// Evento: Esperando la conección
io.on('connect', (socket) =>{
     console.log('Servidor en conección');
     console.log('mi socket id: ' + socket.id);

});
