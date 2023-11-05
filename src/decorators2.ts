interface IDecorator{
    parent: string,
    template: string
}

function ControllerDecoration (config: IDecorator) {
    return function(constructor: any) {
        const current = new constructor() // в декораторрі створюємо екземпляр класу
        const getParent = document.getElementById(config.parent)!
        const createElement = document.createElement(config.template)!

        createElement.innerHTML = current.content
        constructor.prototype.element = createElement
        constructor.prototype.parent = getParent

        getParent?.appendChild(createElement)
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