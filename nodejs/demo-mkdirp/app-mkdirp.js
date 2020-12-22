
const mkdirp = require("mkdirp");

mkdirp('./upload').then(made =>
    console.log(`made directories, starting with ${made}`))