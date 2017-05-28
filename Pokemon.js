class Pokemon {
  constructor (name, level) {
    this.name = name;
    this.level = level;
  }

  show () {
    let name = (this.name) ? this.name : '-не задано-';
    let level = (this.level) ? this.level : '-не задано-';
    return `Имя: ${name}, Уровень: ${level}`;
  }
}

module.exports.Pokemon = Pokemon;
