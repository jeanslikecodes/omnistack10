const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// metodos index (lista), show (unico), store, update, destroy

module.exports = {

    async index(request, response) {

        // retorna todos os devs
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude} = request.body;
        
        /* evitar que um dev seja cadastrado duas vezes */
        let dev = await Dev.findOne({github_username});

        /* caso nao exista, executa if */
        if (!dev) {
            const apiReponse = await axios.get(`http://api.github.com/users/${github_username}`)
    
            // name = login > caso nome não exista, ele pega o login do usuario, que é obrigatorio
            const {name = login, avatar_url, bio} = apiReponse.data;
        
            const techsArray = parseStringAsArray(techs);
            
            //console.log(name, avatar_url, bio, github_username);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });

        }

        
     
         //console.log(request.body);
         return response.json(dev);
     }
};



