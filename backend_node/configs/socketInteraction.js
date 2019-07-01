let orders = [];
let statusRegister = '';
let usersConnected = [];

module.exports = function (socket) {
  console.log('TODOS TELETUBIES');

  socket.on('Registro_orden', value => {
    socketGlobal.emit('Registro_orden', value);
  });

  socket.on('conductor', value => {
    socketGlobal.emit('conductor', 'conductor_conectado');
  });

  socket.on('take_order', value => {
    console.log('TAKE_ORDER', value);
    socketGlobal.emit('take_order', value);
  })

}


