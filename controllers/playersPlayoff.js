const PlayerPlayoff = require('../models/playerPlayoff')

module.exports = {
    index,
    show,
};

function index(req, res){
    res.render('playersPlayoff/index', {
        playersPlayoff: PlayerPlayoff.getAll() 
    });
}

function show(req, res){
    res.render('playersPlayoff/show', {
        playersPlayoff: PlayerPlayoff.getOne(req.params.id)
    });
}