const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Linear = require('./mathematics/Algebra/Equations/Linear.js');

const app = express();
const port = 5000;

//midelewares
app.use(cors());
app.use(bodyParser.json());

app.get('/prueba', (req, res) =>{
    try{
        const data = { message: 'Hola desde el backend!' };
        res.json(data);
    }
    catch(err){ 
        console.log(err);
    }
})

app.post('/algebra', (req, res) =>{
    try{
        const data = req.body.value;
        const components = data.match(/[-+]?[^-+]+/g);
        res.json(components);
    }
    catch(err){ 
        console.log(err);
    }
})

app.post('/algebra/equations/linear', (req, res) =>{
    try {
        const data = Linear(req.body.value);
        res.json(data);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
})



app.listen(port, () => console.log(`Server running on port ${port}`));

