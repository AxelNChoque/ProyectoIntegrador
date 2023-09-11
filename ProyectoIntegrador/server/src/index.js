const express = require('express');
const mainRouter = require('./routes/mainRouter');
const morgan = require('morgan');
const server = express();
const PORT = 3001

// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     // if(url.includes('/rickandmorty/character')){
//     //     let urlId = url.split('/').pop();
//     //     let found = characters.find((character) => character.id === Number(urlId));
//     //     res.writeHead(200,{
//     //         'content-type':'application/json'
//     //     })
//     //     res.end(JSON.stringify(found));
//     // }
//     if(url.includes('/rickandmorty/character/')){
//         let urlId = url.split('/').pop();
//         gerCharById(res, urlId);
//     }


// }).listen(PORT);

server.listen(PORT, () => {
    console.log(`Server raised on port: ${PORT}`);
});

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use(morgan('dev'));
server.use('/rickandmorty', mainRouter);
