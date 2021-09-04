# Streams
| Readable                        | Writable                       | Duplex     | Transform      |
|---------------------------------|--------------------------------|------------|----------------|
| HTTP Responses - Client         | HTTP Request - Client          | net.Socket | Cypto Cipher   |
| HTTP Request - Server           | HTTP Response - Server         |            | Crypto Deciper |
| fs Read Streams                 | fs write streams               |            | Crypto Hash    |
| zlib streams                    | zlib streams                   |            | Crypto Hmac    |
| crypto streams                  | crypto streams                 |            | zlib.ZlibBase  |
| TCP Sockets                     | TCP Sockets                    |            |                |
| Child process stdout and stderr | child process stdin            |            |                |
| process.stdin                   | process.stdout, process.stderr |            |                |

## Types of Stream
- Readable
  - Source 
- Writeable
  - Destination
- Duplex
  - Readable and Writeable
- Transform
  - Modify data as it is read and written

## Implementing & Consuming
### Implementing
`require("stream")`
### Consuming
piping and events.

# Piped Stream
```node
	src.pipe(b);
```
**Duplex** streams can chained piped;
```node
	src.pipe(b).pipe(c).pipe(d);
```

# Events and Functions
## Events
| Readable | Writable    |
|----------|-------------|
| data     | drain       |
| end      | finish      |
| error    | error       |
| close    | close       |
| readable | pipe/unpipe |
## Functions
| Readable                    | Writable             |
|-----------------------------|----------------------|
| pipe(), unpipe()            | write()              |
| read(), unshift(), resume() | end()                |
| pause(), isPaused()         | cork(), uncork()     |
| setEncoding()               | setDefaultEncoding() |

# Readable States
1. Paused (stream.read())
2. Flowing (EventEmitter)
```node 
stream.resume(); // Flowing Mode
stream.pause(); // Paused Mode
```

## Resources
[Advanced NodeJs](https://app.pluralsight.com/library/courses/nodejs-advanced/table-of-contents)
[Mastering Node.js](https://learning.oreilly.com/library/view/mastering-nodejs-/9781785888960/)
