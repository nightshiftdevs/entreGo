let orders = [];
let statusRegister = '';
let usersConnected = [];

module.exports = function (socket) {
  console.log('New user has connected!');

  socket.on('Registro_orden', value => {
    socketGlobal.emit('Registro_orden', value);
  });

  socket.on('conductor', value => {
    socketGlobal.emit('conductor', 'conductor_conectado');
  });

  socket.on('take_order', value => {
    console.log('TAKE_ORDER', value);
    console.log('TAKE_ORDERID', value.orderID);
    socketGlobal.emit('take_order', value);
  })

  socket.on('driver_arrived', value => {
    console.log('driver_arrived', value);
    socketGlobal.emit('driver_arrived', value);
  })

  socket.on('sign_agreement', value => {
    console.log('sign_agreement', value);
    socketGlobal.emit('sign_agreement', value);
  })

  socket.on('end_service', value => {
    console.log('end_service', value);
    socketGlobal.emit('end_service', value);
  })

}


