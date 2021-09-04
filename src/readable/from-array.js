const { Readable } = require("stream");
const arr = ["Bird", "Cat", "Dog", "Squirrel", "Frog", "Moose", "Horse", "Toad"];

const read = Readable.from(arr);

/*
read.on("data", (chunk) => {
  console.log(chunk)
})
*/
read.on("readable", () => {
  console.log(read.read())
})
