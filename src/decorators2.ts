interface IDecorator{
    parent: string,
    template: string
}

// декоратор класа
function ControllerDecoration (config: IDecorator) {
    return function<T extends {new(...arg: any[]): {content: string}}>(originalConstructor: T) {
        
        return class extends originalConstructor{
            private element: HTMLElement
            private parent: HTMLElement
            constructor(...args: any[]){
                super(...args)
                this.parent = document.getElementById(config.parent)!
                this.element = document.createElement(config.template)!

                this.element.innerHTML = this.content
                this.parent.append(this.element)
            }
        }

        // const current = new constructor() // в декораторрі створюємо екземпляр класу
        // const getParent = document.getElementById(config.parent)!
        // const createElement = document.createElement(config.template)!
        // createElement.innerHTML = current.content
        // constructor.prototype.element = createElement
        // constructor.prototype.parent = getParent
        // getParent?.appendChild(createElement)
    }
}

@ControllerDecoration({parent: 'root', template: 'H3'})
class MyControllerTitle { 
    public content = 'My first try with pseudoangular'
}

@ControllerDecoration({parent: 'root', template: 'P'})
class MyControllerParagraph { 
    public content = 'paragraph'
}

const el1 = new MyControllerTitle()
const el2 = new MyControllerParagraph()
// console.log(el1)
// console.log(el2)



// декоратор метода
function ShowParams(target: any, name:string, descriptor: PropertyDescriptor){
    console.log(target)         // посилання на функцію, яку декорує
    console.log(name)           // ім'я функції
    console.log(descriptor)    // ще щось
}

// декоратор метода що допомагає зберегати зіс при копіюванні метода
function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor){ 
    const method = descriptor.value as Function

    return {
        configurable: true,
        enumerable: false,
        get() {
            return method.bind(this)
        }
    }
}

class Notifier {
    public content = 'this message'

    @ShowParams // спрацьовує один раз при ініціалізації КЛАСУ (не об'єктів)
    @AutoBind
    public showMassage() {
        console.log(this.content)
    }
}

const notifier = new Notifier()
const copyShowMessage = notifier.showMassage

notifier.showMassage()
copyShowMessage()
