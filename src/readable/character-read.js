const { Readable } = require("stream");
const readme = ["Hey", "how", "are", "you?"];

class Feed extends Readable {
  constructor(options, text) {
    super(options);
    this.text = text;
    this.index = 0;
  }
  _read() {
    if(this.index < this.text.length) {
      return this.push(this.text[this.index++]);
    } else {
      return this.push(null);
    }
  }
}

let reader = new Feed({encoding: "utf-8"}, readme.join(" "));

reader.on("readable", function() {
  const data = reader.read(16);
  if(data != null) {
    let length = 0;
    while(length <= data.length -1) {
      console.log(data[length++])
    }
  }
})
reader.on("end", function() {
  console.log("ENDED")
})
