const Pokemon = require('../Pokemon').Pokemon;
const expect = require('chai').expect;

describe('Pokemon', () => {

  describe('.show', () => {


    it('вывод покемона с именем и уровнем', () => {
      let pokemon = new Pokemon('Pikachu', 10);
      expect(pokemon.show()).to.equal('Имя: Pikachu, Уровень: 10');
    });
    it('вывод покемона только с именем', () => {
      let pokemon = new Pokemon('Pikachu', '');
      expect(pokemon.show()).to.equal('Имя: Pikachu, Уровень: -не задано-');
    });
    it('вывод покемона только с уровнем', () => {
      let pokemon = new Pokemon('', 10);
      expect(pokemon.show()).to.equal('Имя: -не задано-, Уровень: 10');
    });
    it('вывод пустого покемона', () => {
      let pokemon = new Pokemon('', '');
      expect(pokemon.show()).to.equal('Имя: -не задано-, Уровень: -не задано-');
    });
  });

});
