"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default
    .get(url)
    .then(response => {
    const { id, title, completed } = response.data;
    logTodo(id, title, completed);
})
    .catch(errors => console.log(errors));
const logTodo = (id, title, completed) => console.log(id, title, completed);
//# sourceMappingURL=basic.js.map