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

## Resources
[Advanced NodeJs](https://app.pluralsight.com/library/courses/nodejs-advanced/table-of-contents)


