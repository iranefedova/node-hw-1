const PokemonList = require('./PokemonList').PokemonList;
const Pokemon = require('./Pokemon').Pokemon;

// 1
let Pikachu = new Pokemon("Pikachu", 5);
let Slowpoke = new Pokemon("Slowpoke", 3);

// 2, 5, 7
let plist = new PokemonList(Pikachu, Slowpoke);
plist.add("Bulbasaur", 7);

// 3
let lost = new PokemonList(new Pokemon("Charmander", 1), new Pokemon("Blastoise", 4), new Pokemon("Metapod", 3));
let found = new PokemonList(new Pokemon("Weedle", 7), new Pokemon("Raichu", 9));

// 4
lost.add("Arbok", 2);
found.add("Sandshrew", 4);
found.add("Nidorina", 8);

// 5
lost.show();
found.show();

// 6
found.push(lost.pop());
found.show();

// 7
console.log("Покемон с максимальным уровнем: " + found.max().name);
