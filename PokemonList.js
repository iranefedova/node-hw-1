const Pokemon = require('./Pokemon').Pokemon;

class PokemonList extends Array {

  add (name, level) {
    if (level && !Number.isInteger(level)) {
      return 'Уровень должен быть целым числом!';
    }
    let pokemon = new Pokemon(name, level);
    this.push(pokemon);
    return pokemon;
  }

  show () {
    if (this.length == 0) {
      return 'Список покемонов пуст!';
    }
    for (let pokemon of this) {
      pokemon.show();
    }
    return ("Количество покемонов: " + this.length);
  }

  max () {
    if (this.length == 0) {
      return 'Список покемонов пуст!';
    }
    let maxLevel = this.reduce((max, current) => {
      return (current.level > max.level) ? current : max
    });
    return maxLevel;
  }
}

module.exports.PokemonList = PokemonList;
