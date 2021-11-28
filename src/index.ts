import bodyParser from 'body-parser';
import express from 'express';
import router from './routes/loginRoutes';
import path from 'path';
import cookieSession from 'cookie-session';

const app = express();

app.set('.html', require('ejs').__express);

app.set('views', path.join(__dirname, '../src/views'));
app.use(express.static(path.join(__dirname, '../src/public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdkjflhadskfh'] }));
app.use(router);
app.listen(3000, () =>
	console.log('Server is on and ready... http://localhost:3000/')
);
