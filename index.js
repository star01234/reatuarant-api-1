const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req,res) => {
    res.send('<h1>Hello Restaurant API</h1>');
});

app.listen(5000, ()=>{
    console.log("listening to http://localhost:"+PORT);
});