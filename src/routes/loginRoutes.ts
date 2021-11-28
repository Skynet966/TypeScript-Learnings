import { NextFunction, Request, Response, Router } from 'express';
interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}
const authMiddleware = function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!req?.session?.loggedIn) {
		res.status(401);
	}
	next();
};
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.render('welcome', {
		isLoggedIn: req?.session?.loggedIn,
		title: 'Welcome | TS with Express'
	});
});
router.get('/login', (req: Request, res: Response, next: NextFunction) => {
	res.render('loginForm', { title: 'Login | TS with Express' });
});
router.post(
	'/login',
	(req: RequestWithBody, res: Response, next: NextFunction) => {
		const { email, password } = req.body;
		if (
			email &&
			password &&
			email === 'raju@punjabi' &&
			password === 'p@ss_word2T'
		) {
			req.session = { loggedIn: true };
			res.redirect('/');
		} else {
			res.send('Invalid Username or password!!');
		}
	}
);
router.get('/logout', (req: Request, res: Response) => {
	if (req?.session?.loggedIn) {
		req.session = { loggedIn: false };
		res.redirect('/');
	} else {
		res.redirect('/login');
	}
});
router.get(
	'/protected',
	authMiddleware,
	(req: Request, res: Response, next: NextFunction) => {
		res.render('protected', {
			title: 'Protected Route | TS with Express',
			isLoggedIn: req?.session?.loggedIn
		});
	}
);

export default router;
