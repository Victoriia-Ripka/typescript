let age: number
let name: string
let toggle: boolean
let empty: null
let notInitialize: undefined
// let callback: Function
let callback: (par: number) => number
let anything: any
let some: unknown
let str: string;
let person: [string, number]
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Load {LOADING, READY}
let union: string | number
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let literal: 'enable' | 'disable'


age = 50;
name = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a };
anything = -20;
anything = 'Text';
anything = {};
some = 'Text';
// str = some;  // error
person = ['Max', 21];
union = 1
union = 'string'


function showMessage(message): void {
    console.log(message);
}
  
  
function calc(num1, num2): number {
    return num1 + num2;
}
  
function customError(): never {
    throw new Error('Error');
}

type DataType = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close'
    details?: {
      createAt: Date,
      updateAt: Date,
    }
}

const page1: DataType = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
}
  
const page2: DataType = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}