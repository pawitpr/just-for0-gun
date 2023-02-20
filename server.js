const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    const filename = data.toString().trim();
    console.log(`Client requested file: ${filename}`);

    fs.readFile(filename, (err, fileData) => {
      if (err) {
        console.error(err);
        socket.write('File not found');
      } else {
        socket.write(fileData);
      }
    });
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
