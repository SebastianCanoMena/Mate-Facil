const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();
const port = 4000;

//midelewares
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    try{
        res.send('Hello World!');
    }
    catch(err){ 
        console.log(err);
    }
})
