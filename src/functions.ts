// : number after the parentheses indicates the return type of the function, which is also number
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

interface Data {
    id: number;
    name: string;
}

function clone(source: Data): Data {
    return Object.apply({}, source);
}
const a: Data = { id: 1, name: "Inod" };
const b = clone(a);
