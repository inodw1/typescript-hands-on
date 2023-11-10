// Basic types
let isDone: boolean = false;
let value: number = 6;
let color: string = "blue";
let list1: number[] = [1, 2, 3]; // using square brackets
let list2: Array<number> = [1, 2, 3]; // using a generic array type

// Tuple
let arr: [string, number];
arr = ["inod", 31];

// Enum
// A way of giving more friendly names to sets of numeric values
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// any
let notSure: any = 1992;

// void
// used for functions that do not return a value
function warnUser(): void {
    alert("this is a warning message");
}

// null and undefined
// both 'null' and 'undefined' actually have their own types name 'null' and 'undefined';

let u: undefined = undefined;
let n: null = null;

// never
// Represents the type of values that never occur. For instance,
// a function that always throws an exception or one that never returns;
// such functions have a return type of 'never'

// Object
let user: object = { name: "inod", age: 31 };