const { Router } = require('express');

const devController = require('./controllers/devcontrollers');
const searchController = require('./controllers/searchcontrollers');

const routes = Router();


routes.get('/devs', devController.index);
routes.post('/devs', devController.store);


routes.get('/search', searchController.index);

module.exports = routes;


/* get (pegando usuário com nome, request query) */
//app.get('/users', (request, response) => {
//    console.log(request.query);
//    return response.json({ message: 'hello world'});
//});

/* Delete (Passando usuário com ID, request params)

app.delete('/users/:id', (request, response) => {
   console.log(request.params);
    return response.json({ message: 'hello world'});
}); */

/* Post (passando nome e email no body, request body)
app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'hello world'});
}); */