ORDERS = [];

module.exports = function (socket) {
  console.log('TODOS TELETUBIES');

  socket.on('Registro_orden', value => {
    console.log('value received',value);
    socket.emit('Registro_orden', value);
    console.log('value send',value);
  })

}


