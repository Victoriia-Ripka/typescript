"use strict";
class House {
    constructor(street) {
        this.street = street;
        this.remonted = false;
        this.street = street;
    }
    remont() {
        this.remonted = true;
    }
    static method2() {
        return 'Static method of class does not need ekzemplar of class';
    }
}
class RealHouse extends House {
    constructor(street) {
        super(street);
        this.owner = {};
        RealHouse.countHouses += 1;
    }
    set ownerName(value) {
        this.owner.name = value;
    }
    set ownereAge(value) {
        this.owner.age = value;
    }
    set ownereId(value) {
        this.owner.id = value;
    }
    get ownerInfo() {
        return this.owner;
    }
    showStreet() {
        return this.street;
    }
    showCount() {
        return RealHouse.countHouses;
    }
    method(number) {
        return number;
    }
}
RealHouse.countHouses = 0;
class Home extends RealHouse {
    constructor(street) {
        super(street);
        this.family = {};
    }
    addMama(name) {
        this.family.mama = name;
    }
    set mama(name) {
        this.family.mama = name;
    }
    addPapa(name) {
        this.family.papa = name;
    }
    set papa(name) {
        this.family.papa = name;
    }
    addChild(name) {
        if (this.family.children === undefined) {
            this.family.children = [name];
        }
        this.family.children.push(name);
    }
    set child(name) {
        if (this.family.children === undefined) {
            this.family.children = [name];
        }
        this.family.children.push(name);
    }
    showFamily() {
        return this.family;
    }
    determineHeadFamily(name, age, id) {
        super.ownerName = name;
        super.ownereAge = age;
        super.ownereId = id;
    }
    showHeadFamily() {
        return super.ownerInfo;
    }
    method(number) {
        return number * 10;
    }
}
const house1 = new RealHouse('strret1');
const house2 = new RealHouse('strret2');
const house3 = new RealHouse('strret3');
const ourHome = new Home('lovely');
console.log(ourHome.showFamily());
console.log(ourHome.showCount());
console.log(ourHome.method(1));
console.log(house1.method(1));
console.log(House.method2());
const obj1 = {
    firma: "mazda",
    year: 2019,
    method(par1) {
        console.log(par1);
    }
};
const obj2 = {
    firma: "mazda",
    model: "cx30",
    year: 2019,
    method(par1) {
        console.log(par1);
    }
};
//# sourceMappingURL=oop.js.map