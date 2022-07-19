const { stat } = require('fs');
const http = require('http');
const host = "http://localhost";
const porta = 3000;
const stats = require('./pcRamUsage')

http.createServer((req, resp) => {

  let url = req.url;

  if (url === "/stats") {
    resp.end(JSON.stringify(stats, null, 2))
  } else {
    resp.end('<h1>Seja bem vinda</h1>')
  }

}).listen(porta, () => console.log(`server is running in ${host}:${porta}. ${stats}`));

