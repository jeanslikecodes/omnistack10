const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index (request, response) {
        // buscar todos os devcs num raio de 10 km
        // filtrar por tecnologia
        //console.log(request.query);

        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray, // faz os filtros das tecnologias / $in > operador lógico do mongo
            },
            location: {
                $near:  { // $near > encontrar objetos perto de uma localização
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, // distancia em metros
                },
            },
        });

        return response.json({ devs });
    }
}