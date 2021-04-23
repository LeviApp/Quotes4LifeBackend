const express = require("express");
const quotesRoutes = require('./routes/quotes')
const cors = require('cors')
const server = express();
const morgan = require('morgan')
const PORT = process.env.PORT || '3000'
require('dotenv/config.js')
server.use(morgan("tiny"))
server.use(express.json());
server.use('/quotes', quotesRoutes);
server.use(cors());

if (process.env.NODE_ENV === 'production') {
	server.use(express.static('client/build'));
}

server.get('/', (req, res) => {
    res.send("{ message: 'working so far' }");
  });

server.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

server.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))