const PokemonList = require('../PokemonList').PokemonList;
const Pokemon = require('../Pokemon').Pokemon;
const expect = require('chai').expect;

describe('PokemonList', () => {

  describe('.show', () => {
    let PokeList;

    beforeEach(() => {
      PokeList = new PokemonList();
    });

    it('вывод пустого списка', () => {
      expect(PokeList.show()).to.equal('Список покемонов пуст!');
    });
    it('вывод списка из 1 покемона', () => {
      PokeList.add('Bulbasaur', 7);
      expect(PokeList.show()).to.equal('Количество покемонов: 1');
    });
    it('вывод списка из 2 покемонов', () => {
      PokeList.add('Bulbasaur', 7);
      PokeList.add('Pikachu', 10);
      expect(PokeList.show()).to.equal('Количество покемонов: 2');
    });
  });

  describe('.add', () => {
    let PokeList;

    before(() => {
      PokeList = new PokemonList();
    });

    it('проверка добавления', () => {
      let len = PokeList.length;
      PokeList.add('Bulbasaur', 5)
      expect(PokeList.length).to.equal(len+1);
    });
    it('проверка создания объекта', () => {
      expect(PokeList.add('Bulbasaur', 7)).is.instanceof(Pokemon);
    });
    it('проверка имени объекта', () => {
      expect(PokeList.add('Bulbasaur', 7).name).to.equal('Bulbasaur');
    });
    it('проверка уровня объекта', () => {
      expect(PokeList.add('Bulbasaur', 7).level).to.equal(7);
    });
    it('добавление только имени', () => {
      expect(PokeList.add('Bulbasaur').level).to.equal(undefined);
    });
    it('пустое добавление', () => {
      //оба поля принимают значение undefined
      expect(PokeList.add()).is.instanceof(Pokemon);
    });
    it('проверка добавления сроки в уровне', () => {
      expect(PokeList.add('Bulbasaur', '33')).to.equal('Уровень должен быть целым числом!');
    });
    it('проверка добавления float в уровне', () => {
      expect(PokeList.add('Bulbasaur', 8.2)).to.equal('Уровень должен быть целым числом!');
    });
  });

  describe('.max', () => {
    let PokeList;

    beforeEach(() => {
      PokeList = new PokemonList();
    });

    it('масимальный уровень из 3 покемонов', () => {
      PokeList.add('first', 1);
      PokeList.add('second', 6);
      PokeList.add('third', 3);
      expect(PokeList.max().level).to.equal(6);
    });
    it('масимальный уровень у 1 покемона', () => {
      PokeList.add('Pikachu', 3);
      expect(PokeList.max().level).to.equal(3);
    });
    it('масимальный уровень у пустого списка', () => {
      expect(PokeList.max()).to.equal('Список покемонов пуст!');
    });
  });

});
