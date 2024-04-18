const express = require('express');
const http = require('http');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');

//configuraciones 
const app = express();
const server = http.createServer(app);
//instalar morgan
app.use(morgan('dev'));
app.use(cors());
dotenv.config();
app.use(bodyParser.json());
app.use(express.static('public'));



//asignacion de contenidos
const routerEstructura = require('./api/estructuras.js');
const routerUsers = require('./api/usersinfo.js');
//app.use('/', funcion);
app.use('/', routerEstructura);
app.use('/', routerUsers);


const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY
});

app.get('/openai', async (req, res) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{
            role: 'user', content:' quien fue el consquitador de china'
        }],
        model:'gpt-3.5-turbo',
    })
});


app.get('/principal-post', (req, res) =>{
    res.sendFile('./post.html', {root: 'public'});
});

// ruta 404
app.get('*',(req, res)=>{
    res.status(404).json({'data': 'Informacion no encontrada'});
});




const port = 3000;

server.listen(port, ()=>{
    console.log('server is running on port 3000');
});

