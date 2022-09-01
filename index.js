const express = require("express");
const quotesRoutes = require('./routes/quotes')
const cors = require('cors')
const morgan = require('morgan')

const server = express();
const PORT = process.env.PORT || '3000'

require('dotenv/config.js')
server.use(morgan("tiny"))
server.use(express.json());
server.use(cors());
server.use('/quotes', quotesRoutes);

server.get('/', (req, res) => {
    res.send("{ message: 'working so far' }");
  });

server.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))