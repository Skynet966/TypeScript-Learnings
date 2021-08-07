"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default
    .get(url)
    .then(function (response) {
    var _a = response.data, id = _a.id, title = _a.title, completed = _a.completed;
    logTodo(id, title, completed);
})
    .catch(function (errors) { return console.log(errors); });
var logTodo = function (id, title, completed) {
    return console.log(id, title, completed);
};
//# sourceMappingURL=basic.js.map