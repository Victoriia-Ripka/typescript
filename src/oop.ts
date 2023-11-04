// не може мати об'єктів house1 = new House()
// private, protected and public for abstracts and classes
abstract class House {
    protected remonted = false

    constructor(protected street: string) {
        this.street = street
    }

    public remont() {
        this.remonted = true
    }

    // абстрактинй метод батьківсього класу повинні мати всі діти. метод в класах дітей має свою логіку
    // але відповідає архітектурі в батьківському класі
    // модель 
    public abstract method(par: number): number

    public static method2() {
        return 'Static method of class does not need ekzemplar of class'
    }
}

type PersonType = {
    name?: string,
    age?: number,
    id?: number
}

class RealHouse extends House{
    private static countHouses = 0
    protected owner: PersonType = {}

    constructor(street: string) {
        super(street)
        RealHouse.countHouses += 1
    }

    set ownerName(value: string) {
        this.owner.name = value
    }

    set ownereAge(value: number) {
        this.owner.age = value
    }

    set ownereId(value: number) {
        this.owner.id = value
    }

    get ownerInfo (): object {
        return this.owner
    }

    public showStreet(): string {
        return this.street
    }

    public showCount(): number {
        return RealHouse.countHouses
    }

    public method(number: number) {
        return number
    }
}

type FamilyData = {
    mama?: string,
    papa?: string,
    children?: string[]
}

class Home extends RealHouse{
    private readonly family: FamilyData = {}

    constructor (street: string){
        super(street)
    }

    public addMama(name: string): void{
        this.family.mama = name
    }

    set mama(name: string){
        this.family.mama = name
    }

    public addPapa(name: string): void{
        this.family.papa = name
    }

    set papa(name: string){
        this.family.papa = name
    }

    public addChild(name: string): void{
        if(this.family.children === undefined) {
            this.family.children = [name]
        }
        this.family.children.push(name)
    }

    set child(name: string){
        if(this.family.children === undefined) {
            this.family.children = [name]
        }
        this.family.children.push(name)
    }

    public showFamily(): object {
        return this.family        
    }

    public determineHeadFamily(name: string, age: number, id: number): void{
        super.ownerName = name
        super.ownereAge = age
        super.ownereId = id
    }

    public showHeadFamily(): object {
        return super.ownerInfo
    }

    public method(number: number) {
        return number*10
    }

}

const house1 = new RealHouse('strret1')
const house2 = new RealHouse('strret2')
const house3 = new RealHouse('strret3')
const ourHome = new Home('lovely')

console.log(ourHome.showFamily())
console.log(ourHome.showCount())

console.log(ourHome.method(1))
console.log(house1.method(1))

console.log(House.method2())

// -----------------------------------------------------------------
// в інтерфейсах тільки архітектура, жодної реалізації
// readonly for interfaces when you want some data to protect

// для об'єктів немає різниці тип чи інтерфейс вказуєш як тип
interface ICar1 {
    firma: string
    model?: string
    year: number

    method(par1: number): void
}

type ICar2 = {
    firma: string
    model?: string
    year: number

    method: (par1: number) => void
}

const obj1: ICar1 = {
    firma: "mazda",
    year: 2019,

    method(par1: number) {
        console.log(par1)
    }
}

const obj2: ICar2 = {
    firma: "mazda",
    model: "cx30",
    year: 2019,

    method(par1: number) {
        console.log(par1)
    }
}



interface IPerson {
    name: string;
    age: number;
  
    greet(phrase: string): void;
}
  
interface IDriver extends IPerson {
    rideMessage(): void;
}