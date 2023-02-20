const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  console.log('Client connected');
   socket.write("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
  socket.on('data', (data) => {
   
     console.log(data.toString());
      
    });
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });


const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
