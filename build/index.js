"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const path_1 = __importDefault(require("path"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
app.set('.html', require('ejs').__express);
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['asdkjflhadskfh'] }));
app.use(loginRoutes_1.default);
app.listen(3000, () => console.log('Server is on and ready... http://localhost:3000/'));
//# sourceMappingURL=index.js.map