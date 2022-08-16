// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  chooseVik = Math.floor(Math.random() * this.vikingArmy.length);
  chooseSax = Math.floor(Math.random() * this.saxonArmy.length);
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let dead = this.saxonArmy[this.chooseSax].receiveDamage(
      this.vikingArmy[this.chooseVik].attack()
    );
    if (this.saxonArmy[this.chooseSax].health <= 0) {
      this.saxonArmy.splice(this.chooseSax, 1);
    }
    return dead;
  }

  saxonAttack() {
    let dead = this.vikingArmy[this.chooseVik].receiveDamage(
      this.saxonArmy[this.chooseSax].attack()
    );
    if (this.vikingArmy[this.chooseVik].health <= 0) {
      this.vikingArmy.splice(this.chooseVik, 1);
    }
    return dead;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
