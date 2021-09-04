const { createServer } = require("http");
const { createWriteStream } = require("fs");
const { createGunzip } = require("zlib");
const { basename, join } = require("path");

const server = createServer((req,res) => {
  const filename = basename(req.headers["x-filename"]);
  const destFilename = join("received_files", filename);
  console.log(`File request received: ${filename}`);
  req
    .pipe(createGunzip())
    .pipe(createWriteStream(destFilename))
    .on("finish", () => {
      res.writeHead(201, { 'Content-Type' : 'text/plain' })
      res.send('Ok\n');
      console.log(`File saved: ${destFilename}`);
    })
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
