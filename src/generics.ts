// 1
function  getPromise (): Promise<Array<string | number>>  {
    return new Promise((resolve) => {
      resolve(['Text', 50, 5, 'STRING']);
    });
}
  
getPromise()
.then((data) => {
    console.log(data);
});


// 2
type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
}


// 3
function merge <objA extends object, objB extends object> (objA: objA, objB: objB) {
    return Object.assign(objA, objB);
}


// 4
class Component<T> {
    constructor (public props:T) {
    }
}

interface IProps {
    title: string
}

class Page extends Component<IProps> {
    pageInfo () {
      console.log(this.props.title);
    }
}