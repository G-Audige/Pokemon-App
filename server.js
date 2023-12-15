const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send(
    '<h1>Welcome to the Pokémon app!</h1><a href="/pokemon">View Pokémon</a>'
  );
});
app.get('/pokemon', function (req, res) {
  res.render('Index', {
    storage: pokemon,
  });
});
app.get('/pokemon/new', function (req, res) {
  res.render('New');
});
app.post('/pokemon', function (req, res) {
  req.body.img = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}`;
  pokemon.push(req.body);
  console.log(req.body);
  res.redirect('/pokemon');
});
app.get('/pokemon/:index', function (req, res) {
  res.render('Show', {
    pokemon: pokemon[req.params.index],
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
