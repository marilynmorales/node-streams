const path = require('path'); 
const fs = require("fs");
const { build_dir } = require('@config');

function resolveFilePath() {
  return path.resolve(build_dir, ...arguments);
}

function resolveFileDir() {
  return path.dirname(build_dir, ...arguments);
}

function createFilePath() {
  const file_path = resolveFilePath.apply(this, arguments);
  const dirname = resolveFileDir.apply(this, arguments);
  fs.mkdirSync(dirname, { recursive: true});
  return file_path;
}
function getFilePath() {
  return resolveFilePath(...arguments);
}

module.exports = { createFilePath }
