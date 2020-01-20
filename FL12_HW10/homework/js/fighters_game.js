class Fighter {
    constructor(fighterStats) {
        this._name = fighterStats.name;
        this._damage = fighterStats.damage;
        this._hp = fighterStats.hp;
        this._initialHp = fighterStats.hp;
        this._strength = fighterStats.strength;
        this._agility = fighterStats.agility;
        this._wins = 0;
        this._losses = 0;
    }

    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getStrength() {
        return this._strength;
    }

    getAgility() {
        return this._agility;
    }

    getHealth() {
        return this._hp;
    }

    attack(fighter) {
        if ( Math.random() < (100 - this._strength - this._agility) / 100 ) {
            fighter.dealDamage(this._damage);
            console.log(`${this._name} makes ${this._damage} to ${fighter.getName()}`);
        } else {
            console.log(`${this._name} attack missed`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`);
    }

    heal(healAmount) {
        let totalHp = this._hp + healAmount;
        this._hp = Math.min(this._initialHp, totalHp);
    }

    dealDamage(damageAmount) {
        if (this._hp === 0) {
            return;
        }
        
        this._hp -= damageAmount;
    }

    addWin() {
        this._wins++;
    }

    addLoss() {
        this._losses++;
    }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20});

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() < 1) {
        return `${fighter1.getName()} is dead and can't fight`
    }

    if (fighter2.getHealth() < 1) {
        return `${fighter2.getName()} is dead and can't fight`
    }

    while (fighter1.getHealth() > 1 && fighter2.getHealth() > 1) {
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }

    if (fighter1.getHealth() < 1) {
        console.log(`${fighter2.getName()} has won!`);
        fighter1.addLoss();
        fighter2.addWin();
    }
    
    if (fighter2.getHealth() < 1) {
        console.log(`${fighter1.getName()} has won!`);
        fighter1.addWin();
        fighter2.addLoss();
    }
}