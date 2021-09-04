const { Writable } = require("stream");


const write_to_me = new Writable ({
  write(chunk, encoding, callback) {
    let str_arg = chunk.toString().trim().split("");
    str_arg.push("> ")
    let str = str_arg.reverse().join("");
    process.stdout.write(str + "\n");
    callback();
  },
  final(callback) {
    console.log("finisiehd")
    callback();
  }
});

write_to_me.on("finish", () => {
  console.log("++++++DONE+++++++")
})
//write_to_me.write("HIHIH");
//write_to_me.end();
process.stdout.write("Type something:\n");
process.stdin.pipe(write_to_me)
