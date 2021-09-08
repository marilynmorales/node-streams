const crypto = require("crypto");
const fs = require("fs");
const { Transform } = require("stream");
const zlib = require("zlib");

const file = process.argv[2];

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
  const iv = Buffer.alloc(16, 0);
  unzip(key, iv);
});

const unzip = (key, iv) => {
  fs.createReadStream(file)
    .pipe(progress())
    .pipe(crypto.createDecipheriv("aes192", key, iv))
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(file + ".unzip"))
    .on("end", () => {
      console.log("err")
    })
}
