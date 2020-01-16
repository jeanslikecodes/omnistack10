
const express = require('express'); // instanciando o express
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// se conectando com mongo db
mongoose.connect('mongodb+srv://jeanslikehouses:jeanslikehouses@cluster0-mvynj.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

app.use(express.json()); // todas as rotas irão utilizar json para comunicação
app.use(routes);

app.listen(3333) // acessando a porta 3333 no localhost


