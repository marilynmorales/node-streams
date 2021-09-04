const { Readable } = require("stream");

let start = 50, end = 90;

if(process.argv.length > 2 && process.argv[2] === "--indexes") {
  // Lacking error handling.
  if(process.argv[3]) start = process.argv[3];
  if(process.argv[4]) end = process.argv[4];
}

class ReadMe extends Readable {
  constructor(opts, indexes = {start: 48, end: 57}) {
    super(opts);
    const { start, end } = indexes;
    this.start = start;
    this.current = start;
    this.end = end;
  }
  _read() {
    setTimeout(() => {
      if(this.current > this.end) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.current++));
    }, 100);
  }
}
const readable = new ReadMe(null, {start, end});

readable.on("data", (data) => {
  process.stdout.write(data.toString());
});
readable.on("end", () => {
  process.stdout.write("\n")
})
