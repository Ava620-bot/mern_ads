const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('./db/conn');


app.use(express.json());
app.use(require('./router/path'));

// app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

// app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.get('/', (req, res)=>{
    res.send('hello');
})

app.listen(3000, (req, res)=>{
    console.log('Server started at port 3000');
})