import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send(`<div><h1>Hi there</h1></div>`);
});
router.get('/login', (req: Request, res: Response, next: NextFunction) => {
	res.send(
		`<form method="POST">
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
        </form>`
	);
});
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
	res.send(`<div><h1>Hi ${req}</h1></div>`);
});
router.get('/protected', (req: Request, res: Response, next: NextFunction) => {
	res.send(`<div><h1>Hi there</h1></div>`);
});

export default router;
