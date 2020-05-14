const { io } = require('../server');

io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        cliente.broadcast.emit('enviarMensaje', data);

        /*if (mensaje.usuario) {
            callback({ res: 'TODO SALIÓ BIEN' });
        } else {
            callback({ res: 'TODO SALIÓ MAL' });
        }*/
    });
});