"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware = function (req, res, next) {
    if (!req?.session?.loggedIn) {
        res.status(401);
    }
    next();
};
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.render('welcome', {
        isLoggedIn: req?.session?.loggedIn,
        title: 'Welcome | TS with Express'
    });
});
router.get('/login', (req, res, next) => {
    res.render('loginForm', { title: 'Login | TS with Express' });
});
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === 'raju@punjabi' &&
        password === 'p@ss_word2T') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid Username or password!!');
    }
});
router.get('/logout', (req, res) => {
    if (req?.session?.loggedIn) {
        req.session = { loggedIn: false };
        res.redirect('/');
    }
    else {
        res.redirect('/login');
    }
});
router.get('/protected', authMiddleware, (req, res, next) => {
    res.render('protected', {
        title: 'Protected Route | TS with Express',
        isLoggedIn: req?.session?.loggedIn
    });
});
exports.default = router;
//# sourceMappingURL=loginRoutes.js.map