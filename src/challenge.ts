/**
const todoItems = [
    { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: "in-progress" },
    { id: 3, title: "Write the best app in the world", status: "todo" },
]

function addTodoItem(todo) {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: "todo",
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
 */

// Convert above javascript code to typescript

interface Todo {
    id: number;
    title: string;
    status: string;
    completedOn?: Date;
}

enum itemStatus {
    TODO = "todo",
    DONE = "done",
    INPROGRESS = "in-progress",
}

const todoItems: Todo[] = [
    {
        id: 1,
        title: "Learn HTML",
        status: itemStatus.DONE,
        completedOn: new Date("2021-09-11"),
    },
    { id: 2, title: "Learn TypeScript", status: itemStatus.INPROGRESS },
    {
        id: 3,
        title: "Write the best app in the world",
        status: itemStatus.TODO,
    },
];

function addTodoItem(todo: string): Todo {
    const id = getNextId(todoItems);

    const newTodo: Todo = {
        id,
        title: todo,
        status: itemStatus.TODO,
    };

    todoItems.push(newTodo);

    return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem(
    "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
