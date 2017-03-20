// 1
class Pokemon {
  constructor (name, level) {
    this.name = name;
    this.level = level;
  }

  show () {
    console.log(`Имя: ${this.name}, Уровень: ${this.level}`);
    console.log("-----");
  }
}

let p = new Pokemon("Pikachu", 5);
let s = new Pokemon("Slowpoke", 3);
p.show();
s.show();

// 2, 5, 7
class PokemonList extends Array {
  add (name, level) {
    this.push(new Pokemon(name, level));
  }
  show () {
    for (let i of this) {
      console.log(`Имя: ${i.name}, Уровень: ${i.level}`);
    }
    console.log("Количество покемонов: " + this.length);
    console.log("-----");
  }

  max () {
    let m = this[0];
    for (let i of this) {
      if (i.level > m.level) {
        m = i;
      }
    }
    return m;
  }
}

let plist = new PokemonList(p, s);
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