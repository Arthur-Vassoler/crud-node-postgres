const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

require('./database');

const server = express();

// Releases frontend requisitions
server.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin: '*'
}));

server.use(express.json());
server.use(routes);

server.listen(8888)