import express from "express";
import router from "./routes/quotes.js";
import cors from "cors";
import morgan from "morgan";
const server = express();
const PORT = process.env.PORT || '3000'
require('dotenv/config.js')

server.use(morgan("tiny"))
server.use(express.json());
server.use(cors());
server.use('/quotes', router);

server.get('/', (req, res) => {
    res.send("{ message: 'working so far' }");
  });

server.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))