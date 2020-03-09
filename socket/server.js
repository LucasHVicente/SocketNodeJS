const net = require('net');

const handleConnection = socket =>{
    console.log('alguem se conectou')
    socket.on('end', ()=>{
        console.log('conexão encerrada');
    })
    socket.on('data', data =>{
        const str = data.toString()
        console.log(str);
        if(str === 'end'){
            socket.end();
        }
    })
}

const server = net.createServer(handleConnection);

server.listen(8999, '127.0.0.1');