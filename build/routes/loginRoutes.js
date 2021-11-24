"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.send(`<div><h1>Hi there</h1></div>`);
});
router.get('/login', (req, res, next) => {
    res.send(`<form method="POST">
            <div>
                <label>Email</label>
                <input name="email" type="email"/>
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <div>
                <input name="Submit" type="submit"/>
            </div>
        </form>`);
});
router.post('/login', (req, res, next) => {
    res.send(`<div><h1>Hi ${req}</h1></div>`);
});
router.get('/protected', (req, res, next) => {
    res.send(`<div><h1>Hi there</h1></div>`);
});
exports.default = router;
//# sourceMappingURL=loginRoutes.js.map