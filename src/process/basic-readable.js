const { Readable } = require("stream");

const inStream = new Readable();

inStream.push("A stream is an abstract interface for working with streaming data in Node.js. The stream module provides an API for implementing the stream interface.");

inStream.push("A stream is an abstract interface for working with streaming data in Node.js. The stream module provides an API for implementing the stream interface.".split("").reverse().join(""));
inStream.pipe(process.stdout)
inStream.push(null);
