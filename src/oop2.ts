class Key {
    private signature: number

    constructor(){
        this.signature = Math.floor(Math.random() * (100 - 1) + 1)
    }

    get signatureCode(): number {
        return this.signature
    }
}

class Person {
    constructor(private readonly key: Key){
        this.key = key
    }

    get personKey() {
        return this.key
    }
}

abstract class House1 {
    protected door: "open" | 'close'
    private tenants: Person[]

    constructor(protected key: Key){
        this.key = key
        this.door = 'close'
        this.tenants = []
    }

    public comeIn(person: Person): void {
        if(this.door === "open") {
            this.tenants.push(person)
            console.log('you came in')
        }
    }

    public abstract openDoor (key: Key): boolean
}

class MyHouse extends House1 {
    constructor(key: Key){
        super(key)
    }

    public openDoor (key: Key): boolean {
        if(this.key.signatureCode === key.signatureCode) {
            super.door = 'open'
            console.log('door is open')
            return true
        }
        return false
    }
}

const key = new Key()
const vika = new Person(key)
const vikaHouse = new MyHouse(key)

vikaHouse.openDoor(vika.personKey)
vikaHouse.comeIn(vika)
