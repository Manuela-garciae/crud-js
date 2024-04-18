const express = require('express');
const fs = require('fs');
//Se crea la ruta
let router = express.Router();
let users = []

function readData(){
    const jsonData = fs.readFileSync('./src/data.json', 'utf-8');
    users = JSON.parse(jsonData)
}
readData();
//GET
 // listar todos los usuarios
router.get('/users', (req, res) => {
    res.status(200).json(users);
});
  
//SHOW
//mostrar un usuario por id
router.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((item) => item.id === id);
    //validar el user
    if (user === undefined) {
        return res.status(404).json({'error': 'no se puede encontrar el id'})
    } 
    res.status(200).json(user); 
});
//CREATE
//agg por medio de body un dato
router.post('/users', (req, res) => {
    const userInfo = req.body;
    users.push(userInfo);
    console.log(users);
    res.status(201).json(users); 
});

//UPDATE
//Actualiza por medio del id un elemento en el body 
router.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    //valicacion de id
    const user = users.find((item) => item.id === id);
    const userInfo = req.body;
    if(!user){
        return res.status(404).json({'error': 'no se puede encontrar el id'})
    }
    //tomar el objeto completo y asignarle el elemento con base al elemnto en el body
    Object.assign(user, userInfo)
    
    res.status(201).json(user); 
});

//deletee
//elimina usuarios 
router.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    //valicacion de id
    const index = users.findIndex((item) => item.id === id);
    if(index === -1){
        return res.status(404).json({'error': 'no se puede encontrar el id'})
    }
    users.splice(index, 1);
    res.status(201).json({"mensaje": "Usuario eliminado", "data": users}); 

});

module.exports = router;