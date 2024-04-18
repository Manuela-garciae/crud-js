const express = require('express');
//Se crea la ruta
let router = express.Router();

//()=> {}
// app.get('/', funcion); get, post, put, delete


router.get('/hola',(req, res)=>{
    res.status(201).json({'data': 'Hello World'});
});

router.get('/infojson',(req, res)=>{
    res.status(201).json([{
        nombre: "Macarena",
        edad: 15,
        email: 'Macarena@gmail.com'
    },
    {
        nombre: "Camila",
        edad: 19,
        email: 'cami@gmail.com'
    }]);
});

module.exports = router;