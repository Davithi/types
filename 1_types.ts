const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 5;
const float: number = 5.5;
const num: number = 3e10;

const message: string = "hello TypeScript";

const numArray1: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = [1, 2, 3, 4, 5]; //Generic

const words1: string[] = ["Jack", "Jack"];
const words2: Array<string> = ["Jack", "Jack"]; //Generic

//data Type Tuple

const contact1: [string, number] = ["Hello", 12345];

//data type any

let anything: any = 'text';
anything = 5;
anything = 'hello';
anything = true;
anything = {};

//void
function sayHi(name: string): void {
  console.log(name);
}
sayHi("Jack");


//never 
function throwError(message:string):never {
     throw new Error(message);
}

function infinite():never {
    while (true) {
        
    }
}

//
type Login = string;
type PNumber = number;

const login:Login = 'hello';
const phoneNumber:PNumber = 123456789;

type ID = string | number;
const id1: ID = 'qqq';
const id2: ID = 324;
// const id3: ID = true; //Error

type SomeType = string | null | undefined
