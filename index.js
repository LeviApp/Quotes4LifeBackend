const express = require("express");
const quotesRoutes = require('./routes/quotes')
const cors = require('cors')
const server = express();

require('dotenv/config.js')

server.use(express.json());
server.use('/quotes', quotesRoutes);
server.use(cors());

server.get('/', (req, res) => {
    res.send("{ message: 'working so far' }");
  });

server.get('/quotes', (req,res) => {
    res.send("{ message: 'quotes are working' }");
    // res.status(200).json(rows)
})

server.listen(process.env.PORT, () => console.log(`Server is running on port http://localhost:${process.env.PORT}`))