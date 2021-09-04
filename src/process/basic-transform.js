const { Transform } = require("stream");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  }
})

class Output extends Transform {
  _transform(chunk, encoding, callback) {
    callback(null, `> ${chunk.toString()}`);
  }
}
const output = new Output();


process.stdout.write("Type to turn input string to uppercase.\n")
process.stdin
  .pipe(uppercase)
  .pipe(output)
  .pipe(process.stdout)

process.on("SIGINT", (err, as) => {
  console.log("exiting...");
  process.exit();
})
