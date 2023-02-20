const net = require('net');

const server = net.createServer((socket) => {
  console.log('client connected');

  const start = performance.now();
  const data = 'x'.repeat(1024 * 1024); // 1 MB of data

  socket.write(data);

  socket.on('data', (data) => {
    const end = performance.now();
    const duration = end - start; // in milliseconds
    const speed = data.length / (duration / 1000) / 1024 / 1024; // in Mbps
    console.log(`received ${data.length} bytes in ${duration.toFixed(2)} ms, speed: ${speed.toFixed(2)} Mbps`);
    socket.end();
  });

  socket.on('end', () => {
    console.log('client disconnected');
  });
});

server.listen(8000, () => {
  console.log('server listening on port 8000');
});
