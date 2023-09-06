const http = require('http');
const characters = require('./utils/data.js');
const PORT = 3001

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    if(url.includes('/rickandmorty/character')){
        let urlId = url.split('/').pop();
        let found = characters.find((character) => character.id === Number(urlId));
        res.writeHead(200,{
            'content-type':'application/json'
        })
        res.end(JSON.stringify(found));
    }

}).listen(PORT);