const stream = require("stream");

let Feed = function(channel) {
  let readable = new stream.Readable({});
  let news = [
    "Big Win!",
    "Stocks Down!",
    "Acrod Sad!"
  ];

  readable._read = () => {
    if(news.length) {
      return readable.push(news.shift());
    }
    readable.push(null);
  };

  return readable;
}

let feed = new Feed();

feed.on("readable", () => {
  let data = feed.read();
  data && process.stdout.write(data);
});

feed.on("end", () => { 
  console.log("no more news")
})
