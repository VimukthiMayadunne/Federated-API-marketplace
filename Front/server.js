const express = require('express');
const http =require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001 ;
app.use(express.static(__dirname +'${FILEPATH FOR YOUR INDEX.HTML FILE}'));
app.get('/*',(req,res) => res.sendFile(path.join(__dirname)));
const server =http.createServer(app)
server.listen(port,()=> console.log('Runing on port 3001'));
