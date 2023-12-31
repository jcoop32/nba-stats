const players = [
  {
    id: 382938,
    name: 'Joel Embiid',
    img: '/images/nba-players-img/embiid.png',
    ppg: 33.3,
    rpg: 10.2,
    apg: 4.2,
    team: 'Phi',
  },
  {
    id: 382931,
    name: 'Luka Doncic',
    img: '/images/nba-players-img/luka.png',
    ppg: 32.8,
    rpg: 8.7,
    apg: 8.1,
    team: 'Dal',
  },
  {
    id: 689484,
    name: 'Damian Lillard',
    img: '/images/nba-players-img/dame.png',
    ppg: 32.2,
    rpg: 4.8,
    apg: 7.3,
    team: 'Por',
  },
  {
    id: 689356,
    name: 'Shai Gilgeous-Alexander',
    img: '/images/nba-players-img/shai.png',
    ppg: 31.5,
    rpg: 4.8,
    apg: 5.4,
    team: 'Okc',
  },
  {
    id: 357934,
    name: 'Giannis Antetokounmpo',
    img: '/images/nba-players-img/giannis.png',
    ppg: 31.1,
    rpg: 11.8,
    apg: 5.7,
    team: 'Mil',
  },
  {
    id: 673953,
    name: 'Jayson Tatum',
    img: '/images/nba-players-img/jt.png',
    ppg: 30.2,
    rpg: 8.8,
    apg: 4.6,
    team: 'Bos',
  },
  {
    id: 684933,
    name: 'Stephen Curry',
    img: '/images/nba-players-img/steph.png',
    ppg: 29.6,
    rpg: 6.1,
    apg: 6.3,
    team: 'GSW',
  },
  {
    id: 648933,
    name: 'LeBron James',
    img: '/images/nba-players-img/lbj.png',
    ppg: 28.9,
    rpg: 8.4,
    apg: 6.8,
    team: 'Lal',
  },
  {
    id: 123533,
    name: 'Donovan Mitchell',
    img: '/images/nba-players-img/dm.png',
    ppg: 28.3,
    rpg: 4.3,
    apg: 4.4,
    team: 'Cle',
  },
  {
    id: 689403,
    name: 'Devin Booker',
    img: '/images/nba-players-img/dbook.png',
    ppg: 28,
    rpg: 4.6,
    apg: 5.5,
    team: 'PHX',
  },
  {
    id: 789045,
    name: 'Mikal Bridges',
    img: '/images/nba-players-img/mikal.png',
    ppg: 27.4,
    rpg: 4.7,
    apg: 2.7,
    team: 'BKN',
  },
  {
    id: 949536,
    name: 'Jaylen Brown',
    img: '/images/nba-players-img/jb.png',
    ppg: 26.7,
    rpg: 6.8,
    apg: 3.4,
    team: 'Bos',
  },
  {
    id: 909468,
    name: 'Kyrie Irving',
    img: '/images/nba-players-img/kyrie.png',
    ppg: 26.7,
    rpg: 5.1,
    apg: 5.9,
    team: 'Dal',
  },
  {
    id: 694684,
    name: 'Anthony Davis',
    img: '/images/nba-players-img/ad.png',
    ppg: 26.5,
    rpg: 12.4,
    apg: 2.6,
    team: 'Lal',
  },
  {
    id: 738545,
    name: 'Ja Morant',
    img: '/images/nba-players-img/ja.png',
    ppg: 26.4,
    rpg: 5.9,
    apg: 8.1,
    team: 'Mem',
  },
  {
    id: 578342,
    name: 'Trae Young',
    img: '/images/nba-players-img/trae.png',
    ppg: 26.2,
    rpg: 3.0,
    apg: 9.9,
    team: 'Atl',
  },
  {
    id: 456765,
    name: 'Zion Williamson',
    img: '/images/nba-players-img/zion.png',
    ppg: 26.0,
    rpg: 7,
    apg: 4.6,
    team: 'Nor',
  },
  {
    id: 634534,
    name: 'Kevin Durant',
    img: '/images/nba-players-img/kd.png',
    ppg: 25.6,
    rpg: 6.3,
    apg: 3.4,
    team: 'PHX',
  },
  {
    id: 753354,
    name: 'Lauri Markkanen',
    img: '/images/nba-players-img/lauri.png',
    ppg: 25.6,
    rpg: 8.6,
    apg: 1.9,
    team: 'UTA',
  },
  {
    id: 898939,
    name: `De'Aaron Fox`,
    img: '/images/nba-players-img/dfox.png',
    ppg: 25.1,
    rpg: 4.2,
    apg: 6.1,
    team: 'Sac',
  },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return players;
}

function getOne(id) {
  id = parseInt(id);
  return players.find((player) => player.id === id);
}
