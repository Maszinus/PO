console.log("Zadanie 1");

class User {
    constructor(nick, name, surname, email, role) {
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.loginDates = [];
        this.active = true;
    }

    logIn() {
        this.loginDates.push(new Date().toLocaleString('pl-PL'));
    }

    showLoginDates() {
        console.log(this.loginDates);
    }

    showDetails() {
        console.log(this);
    }

    toggleActive() {
        this.active = !this.active;
    }
}

const users = [
    new User('nick1', 'Wojtek', 'Snopek', 'wojtek@gmail.com', 'editor'),
    new User('nick2', 'Marek', 'Genge', 'mgenge@itmargen.com', 'admin')
];

users[0].logIn();
users[0].showLoginDates();
users[0].showDetails();
users[0].toggleActive();
users[0].showDetails();

//Zadanie 2
console.log("Zadanie 2");

//Żeby sprawdzić działanie reszty zadań polecam te wstawić w komentarz

class Fighter {
    constructor(name) {
        this.name = name;
        this.live = 20;
        this.power = 3;
    }

    attack(who) {
        if (Math.random() < 0.5) {
            who.live -= this.power;
            console.log(`${this.name} uderzył(a) ${who.name}. ${who.name} ma ${who.live} punktów zdrowia.`);
        } else {
            console.log(`${this.name} nie trafił(a)!`);
        }
    }
}

const names = ["Baka", "Jax", "Johnny Cage", "Kitana", "Kung Lao", "Liu Kang", "Mileena", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sub-Zero"];
const fighters = names.map(name => new Fighter(name));

function getFighter() {
    return fighters.length > 0 ? fighters.pop() : null;
}

let leftFighter = null;
let rightFighter = null;

function loop() {
    leftFighter = leftFighter || getFighter();
    rightFighter = rightFighter || getFighter();

    if (leftFighter && rightFighter) {
        if (Math.random() < 0.5) {
            leftFighter.attack(rightFighter);
        } else {
            rightFighter.attack(leftFighter);
        }

        if (leftFighter.live <= 0) leftFighter = null;
        if (rightFighter.live <= 0) rightFighter = null;

        if (!fighters.length && (!leftFighter || !rightFighter)) {
            console.log('Koniec turnieju');
            return;
        }
    }

    setTimeout(loop, 1000);
}

loop();

//Zadanie 3
console.log("Zadanie 3");

String.prototype.sortText = function (char) {
    return this.split(char).sort().join(char);
};

console.log("Piotr;Konrad;Grzegorz".sortText(';'));

//Zadanie 4
console.log("Zadanie 4");

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

console.log("Alan ma kota".reverse());

//Zadanie 5
console.log("Zadanie 5");

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};

Array.prototype.sortNr = function () {
    return this.sort((a, b) => a - b);
};

console.log([1, 2, 5].sum());
console.log([1, 1.5, 5431, 22, 3.3].sortNr());