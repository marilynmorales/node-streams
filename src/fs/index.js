require('module-alias/register');
const { createFilePath, getFilePath } = require('@helpers/file-paths');
const fs = require('fs');
const server = require('http').createServer();

const filename = "./big.file";
const file_path = createFilePath(filename);
const file = fs.createWriteStream(file_path);

for(let i = 0; i < 100; i++) {
  file.write("A stream is an abstract interface for working with streaming data in Node.js. The stream module provides an API for implementing the stream interface.");
}

file.end();


server.on('request', (req, res) => {
  const src = fs.createReadStream(file_path);
  src.pipe(res);
});

server.listen(8001);
