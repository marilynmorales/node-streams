const crypto = require("crypto");
const fs = require("fs");
const zlib = require("zlib");
const file = process.argv[2];
const { Transform } = require("stream");

const progress = () => {
  return new Transform({
    transform(chunk, encoding, callback) {
       process.stdout.write(".");
       callback(null, chunk);
    }
  });
};

const password = "password123";
crypto.scrypt(password, "salt", 24, (err, key) => {
  if(err) throw err;
  console.log(key)
  const iv = Buffer.alloc(16, 0)
  create(key, iv);
});

const create = (key, iv) => {
  //console.log(iv)
  fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(crypto.createCipheriv("aes192", key, iv))
    .pipe(progress())
    .pipe(fs.createWriteStream(file + ".zz"))
    .on("finish", () => { console.log("DONE") })
}
