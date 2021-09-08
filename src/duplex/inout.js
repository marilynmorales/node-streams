const { Duplex } = require("stream");

const inout = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    if(this.currentCharCode > 90) {
      this.push(null);
      return;
    }
    this.push(String.fromCharCode(this.currentCharCode++));
  }
});

inout.currentCharCode = 65;
process.stdin.pipe(inout).pipe(process.stdout);
