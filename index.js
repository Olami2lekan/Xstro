import express from 'express';
import dotenv from 'dotenv';
import connect from './lib/client.js';
import config from './config.js';
import loadFiles from './lib/utils.js';
import getSession from './lib/session.js';

dotenv.config();

(async () => {
	console.log('XSTRO MD');
	await loadFiles();
	await config.DATABASE.sync();
	await getSession();
	await connect();

	const app = express();
	const PORT = process.env.PORT || 8000;

	app.listen(PORT, () => {});
})();
