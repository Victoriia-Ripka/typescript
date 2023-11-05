// @Logger
// function Logger (constructor: Function) {
//     console.log('Logging...')
//     console.log(constructor)
// }

// @Logger() - можна передавати аргументи в дужках декоратора
function Logger (par: string = 'TS') {
    return function(constructor: Function) {
        console.log('Logging... ', par)
        console.log(constructor)
    }
}

function AddProperty() {
    return function(constructor: Function){
        constructor.prototype.modify = true
        console.log('added property: ', constructor)
    }
}

@Logger()
class Controller {

}

@AddProperty()
@Logger('Hello')
class Controller2 {
    public modify = false //декоратор не перезапише властивості класу
    // public modify?: boolean //декоратор визанчить властивості класу, якщо вони були задані як необов'язкові
}

const c1 = new Controller()
const c2 = new Controller2()
console.log('twice decorated: ', c2)
console.log('twice decorated: ', c2.modify)