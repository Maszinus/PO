//Zadanie 1
console.log("ZADANIE 1");

const rectangle = {
    height:10,
    width:20,
    showArea(){
        return this.height * this.width;
    }
};

const circle = {
    radius:10,
    showArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(rectangle);
console.log(circle);

console.log(`Kwadrat ma szerokość ${rectangle.width} i wysokość ${rectangle.height}`);
console.log(`Jego pole to ${rectangle.showArea()}`);

console.log(`Koło ma promień ${circle.radius}`);
console.log(`Jego pole to ${circle.showArea().toFixed(2)}`);

//Zadanie 2
console.log("ZADANIE 2");

const currentUser = {
    name:"Jan",
    surname:"Kowalski",
    email:"JanKowalski@gmail.com",
    www:"JanKowalski.pl",
    userType:"Admin",
    isActive:false,

    setActive(active) {
        this.isActive = active;
    },
    show(){
        console.log(`Imie: ${this.name}\nNazwisko: ${this.surname}\nMail: ${this.email}\nStrona: ${this.www}\nAktywny?: ${this.isActive}`);
    }

};

currentUser.show();

//Zadanie 3
console.log("ZADANIE 3:");
const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    pageCount: 281,
    publisher: 'J.B. Lippincott & Co.',


    showDetails: function() {console.log('Book details:');
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

book.showDetails();

//Zadanie 4
console.log("ZADANIE 4");
const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,

    flyTo(place, distance) {
        this.currentLocation = place;
        this.flyDistance = distance;
        console.log(`Statek ${this.name} doleciał do miejsca ${this.currentLocation}.`);
    },

    showInfo() {
        console.log(`Informacje o statku:\n----\nStatek ${this.name}\ndoleciał do miejsca ${this.currentLocation}\nStatek przeleciał już całkowity dystans ${this.flyDistance} jednostek.
    `);
    },

    meetClingon() {
        let victoryPoints = 0;

        for (let i = 0; i < 100; i++) {
            const Result = Math.random();
            if (Result > 0.5) {
                victoryPoints++;
            }
        }
        if (victoryPoints >= 50) {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami.`);
        } else {
            //console alert nie istnieje
            console.warn(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów.`);
        }
    }
};

spaceShip.flyTo('ZSEGW',123);
spaceShip.showInfo();
spaceShip.meetClingon();

//Zadanie 5
console.log("ZADANIE 5");

const book2 = {
    users: [],

    addUser(name, age, phone) {
        this.users.push({ name, age, phone });
    },

    showUsers() {
        console.log(`Wszyscy użytkownicy w książce:`);
        this.users.forEach(user => {
            console.log(`Imię: ${user.name}, Wiek: ${user.age}, Telefon: ${user.phone}`);
        });
    },

    findByName(name) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].name === name) {
                console.log(this.users[i]);
                return;
            }
        }
        console.log(false);
    },

    findByPhone(phone) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].phone === phone) {
                console.log(this.users[i]);
                return;
            }
        }
        console.log(false);
    },

    getCount() {
        console.log(`Liczba użytkowników: ${this.users.length}`);
    }
};

book2.addUser("Piotr", 50, "536273826");
book2.addUser("Marcin", 45, "3739273528");

book2.showUsers();
book2.findByName("Adam"); //false
book2.findByPhone("3739273528");
book2.getCount();

//Zadanie 6
console.log("ZADANIE 6");
const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generateIncTable(nr) {
        const arr = [];
        for (let i = 0; i <= nr; i++) {
            arr.push(i);
        }
        return arr;
    },

    generateRandomTable(lng, min, max) {
        const arr = [];
        for (let i = 0; i < lng; i++) {
            arr.push(this.randomNumber(min, max));
        }
        return arr;
    },

    generateTableFromText(str) {
        if (typeof str !== 'string') {
            return [];
        }
        return str.split(' ');
    },


    getMaxFromTable(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    },

    getMinFromTable(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    },

    delete(arr, index) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
        }
    }
};

console.log(tableGenerator.randomNumber(1, 10));
console.log(tableGenerator.generateIncTable(5));
console.log(tableGenerator.generateRandomTable(5, 1, 10));
console.log(tableGenerator.generateTableFromText("tekst"));
console.log(tableGenerator.getMaxFromTable([1, 2, 3, 4, 5])); // 5
console.log(tableGenerator.getMinFromTable([1, 2, 3, 4, 5])); // 1

const arr = [1, 2, 3, 4, 5];
tableGenerator.delete(arr, 2);
console.log(arr);

// Zadanie 7

// Definicja obiektu text
const text = {
    check(txt, word) {
        return txt.toLowerCase().includes(word.toLowerCase());
    },

    getCount(txt) {
        return txt.length;
    },

    getWordsCount(txt) {
        return txt.split(' ').length;
    },

    setCapitalize(txt) {
        return txt.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    },

    setMix(txt) {
        return txt.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    },

    generateRandom(lng) {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let randomText = '';
        for (let i = 0; i < lng; i++) {
            randomText += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomText;
    }
};

// Testowanie metod
console.log(text.check("ala ma kota", "kota")); // true
console.log(text.getCount("ala ma kota")); // 11
console.log(text.getWordsCount("Ala ma kota")); // 3
console.log(text.setCapitalize("ala ma kota")); // "Ala Ma Kota"
console.log(text.setMix("ala ma kota")); // "aLa mA KoTa"
console.log(text.generateRandom(10)); // "dkjiuhtjox" (lub inny losowy tekst)