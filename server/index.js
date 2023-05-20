const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



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

app.post('/suma', (req, res) =>{
    try{
        const data = req.body.value;
        const suma = eval(data);
        res.json(suma);
    }
    catch(err){ 
        console.log(err);
    }
})
app.listen(port, () => console.log(`Server running on port ${port}`));

