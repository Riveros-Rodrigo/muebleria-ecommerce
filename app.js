const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const app = express();
const PORT = 3030;

// Configurar el middleware de Sass
app.use(
    sassMiddleware({
        src: __dirname + '/public',
        dest: __dirname + '/public',
        debug: true,
        outputStyle: 'compressed' // Opciones: nested, expanded, compact, compressed
    }));

//ruteo los recursos estaticos
app.use(express.static('public'));

// RUTAS
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));



app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));