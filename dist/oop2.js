"use strict";
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * (100 - 1) + 1);
    }
    get signatureCode() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
        this.key = key;
    }
    get personKey() {
        return this.key;
    }
}
class House1 {
    constructor(key) {
        this.key = key;
        this.key = key;
        this.door = 'close';
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door === "open") {
            this.tenants.push(person);
            console.log('you came in');
        }
    }
}
class MyHouse extends House1 {
    constructor(key) {
        super(key);
    }
    openDoor(key) {
        if (this.key.signatureCode === key.signatureCode) {
            super.door = 'open';
            console.log('door is open');
            return true;
        }
        return false;
    }
}
const key = new Key();
const vika = new Person(key);
const vikaHouse = new MyHouse(key);
vikaHouse.openDoor(vika.personKey);
vikaHouse.comeIn(vika);
//# sourceMappingURL=oop2.js.map