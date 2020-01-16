const mongoose = require('mongoose')
const PointSchema = require('./utils/pointSchema')

const devSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs:  [String], // vetor de strings
    location: {
        type: PointSchema,
        index:'2dsphere'
    }
});

module.exports = mongoose.model('dev', devSchema);