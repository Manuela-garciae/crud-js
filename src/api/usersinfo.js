const express = require('express');
//Se crea la ruta
let router = express.Router();

const users = [{
    id: 1,
    nombre: "Macarena",
    edad: 15,
    email: 'Macarena@gmail.com',
    create_at: new Date("2024-02-13")
},
{
    id: 2,
    nombre: "Camila",
    edad: 19,
    email: 'cami@gmail.com',
    create_at: new Date("2024-02-14")
}]

 
router.get('/users', (req, res) => {
    res.status(200).json(users);
});

router.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((item) => item.id === id);
    //validar el user
    if (user === undefined) {
        return res.status(404).send('no se puede encontrar el id')
    } 
    res.status(200).json(user);
   
    
})

module.exports = router;