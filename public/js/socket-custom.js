var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//On = escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Emit = enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Fran',
    mensaje: 'Hola mundo'
}, function(res) {
    console.log('Respuesta server', res);
});


//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});