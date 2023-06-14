const Player = require('../models/player')

module.exports = {
    index,
    show,
};

function index(req, res){
    res.render('players/index', {
        players: Player.getAll() 
    });
}

function show(req, res){
    res.render('players/show', {
        players: Player.getOne(req.params.id)
    });
}