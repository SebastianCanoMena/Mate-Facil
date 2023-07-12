const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Linear = require('./mathematics/Algebra/Equations/Linear.js');
const Quadratic = require('./mathematics/Algebra/Equations/Quadratic.js');
const Radical = require('./mathematics/Algebra/Equations/Radical.js');
const Rational = require('./mathematics/Algebra/Equations/Rational.js');
const Systems = require('./mathematics/Algebra/Equations/Systems.js');

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

//Linear
app.post('/algebra/equations/linear', async (req, res) =>{
    try {
        const data = Linear(req.body.value);
        res.json(data);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
})

//Quadratic
app.post('/algebra/equations/quadratic', async (req, res) =>{
    try {
        const data = Quadratic(req.body.value);
        res.json(data);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
})

//Radical
app.post('/algebra/equations/radical', (req, res) =>{
    try {
        const data = Radical(req.body.value);
        res.json(data);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
})


//Rational
app.post('/algebra/equations/rational', (req, res) =>{
    try {
        const data = Rational(req.body.value);
        res.json(data);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
})

//Systems
app.post('/algebra/equations/systems', (req, res) =>{
    try {
        const data = Systems(req.body.value);
        res.json(data);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
})

app.listen(port, () => console.log(`Server running on port ${port}`));

