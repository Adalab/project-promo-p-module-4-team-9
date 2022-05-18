// Fichero src/index.js
// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
// Creamos el servidor
const server = express();
// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: '10mb',
  })
);

server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http:/localhost:${serverPort}`);
});
const savedCards = [];
// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  if (
    req.body.name !== '' &&
    req.body.email !== '' &&
    req.body.job !== '' &&
    req.body.photo !== '' &&
    req.body.phone !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== ''
  ) {
    const newCard = { ...req.body, id: uuidv4() };
    savedCards.push(newCard);
    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: 'Faltan parámetros',
    };
    res.json(responseError);
  }
});

server.get('/card/:id', (req, res) => {
  console.log(req.params.id);
  const userCard = savedCards.find((card) => card.id === req.params.id);
  res.render('card', userCard);
});

const staticServerPathWeb = './src/public-react'; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

const staticServerPathStyles = './src/public-styles';
server.use(express.static(staticServerPathStyles));
