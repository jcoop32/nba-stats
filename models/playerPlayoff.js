const playersPlayoff = [
    {id: 489822, name: 'Devin Booker', img: '/images/nba-players-img/dbook.png', ppg: 33.7, rpg: 4.8, apg: 7.2, team: 'PHO'},
    {id: 490294, name: 'Anthony Edwards', img: '/images/nba-players-img/ant.png', ppg: 31.6, rpg: 5, apg: 5.2, team: 'MIN'},
    {id: 438920, name: 'Stephen Curry', img: '/images/nba-players-img/steph.png', ppg: 30.5, rpg: 5.2, apg: 6.1, team: 'GSW'},
    {id: 948924, name: 'Nikola Jokić', img: '/images/nba-players-img/joker.png', ppg: 30, rpg: 13.5, apg: 9.5, team: 'DEN'},
    {id: 137482, name: 'Trae Young', img: '/images/nba-players-img/trae.png', ppg: 29.2, rpg: 3.7, apg: 10.2, team: 'ATL'},
    {id: 759323, name: 'Kevin Durant', img: '/images/nba-players-img/kd.png', ppg: 29, rpg: 8.7, apg: 5.5, team: 'PHO'},
    {id: 478539, name: 'Jalen Brunson', img: '/images/nba-players-img/brunson.png', ppg: 27.8, rpg: 4.9, apg: 5.6, team: 'NYK'},
    {id: 578829, name: `De'Aaron Fox`, img: '/images/nba-players-img/dfox.png', ppg: 27.4, rpg: 5.4, apg: 7.7, team: 'SAC'},
    {id: 839482, name: 'Jayson Tatum', img: '/images/nba-players-img/jt.png', ppg: 27.2, rpg: 10.5, apg: 5.3, team: 'BOS'},
    {id: 751551, name: 'Jimmy Butler', img: '/images/nba-players-img/jimmy.png', ppg: 26.9, rpg: 6.5, apg: 5.9, team: 'MIA'},
    {id: 156151, name: 'Jamal Murray', img: '/images/nba-players-img/jamal.png', ppg: 26.1, rpg: 5.7, apg: 7.1, team: 'DEN'},
    {id: 456516, name: 'Ja Morant', img: '/images/nba-players-img/ja.png', ppg: 24.6, rpg: 6.8, apg: 7, team: 'MEM'},
    {id: 940953, name: 'LeBron James', img: '/images/nba-players-img/lbj.png', ppg: 24.5, rpg: 9.9, apg: 6.5, team: 'LAL'},
    {id: 883947, name: 'Khris Middleton', img: '/images/nba-players-img/km.png', ppg: 23.8, rpg: 6.4, apg: 6.2, team: 'MIL'},
    {id: 289483, name: 'Joel Embiid', img: '/images/nba-players-img/embiid.png', ppg: 23.7, rpg: 9.8, apg: 2.7, team: 'PHI'},
    {id: 573824, name: 'Russell Westbrook', img: '/images/nba-players-img/russ.png', ppg: 23.6, rpg: 7.6, apg: 7.4, team: 'LAC'},
    {id: 593039, name: 'Desmond Bane', img: '/images/nba-players-img/bane.png', ppg: 23.5, rpg: 6, apg: 3.2, team: 'MEM'},
    {id: 184382, name: 'Donovan Mitchell', img: '/images/nba-players-img/dm.png', ppg: 23.2, rpg: 5, apg: 7.2, team: 'CLE'},
    {id: 678422, name: 'Dejounte Murray', img: '/images/nba-players-img/djm.png', ppg: 23, rpg: 7.2, apg: 6.8, team: 'ATL'},
    {id: 478429, name: 'Jaylen Brown', img: '/images/nba-players-img/jb.png', ppg: 22.7, rpg: 5.6, apg: 3.4, team: 'BOS'},
    
];

module.exports = {
    getAll,
    getOne,
}


function getAll(){
    return playersPlayoff;
}

function getOne(id){
    id = parseInt(id)
    return playersPlayoff.find(playerP => playerP.id === id)
}