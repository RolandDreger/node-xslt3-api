﻿import fs from 'fs';
import path from 'path';

const logFileName = 'log.txt';

const log = (req, res, next) => {

	let logString = `
		Request Date: ${ new Date() }
		Host: ${ req.hostname }
		Path: ${ req.path }
		Method: ${ req.method }
		URL: ${ req.originalUrl } 
	`;

	if(!fs.existsSync(req.context.folder.log)) {
		fs.mkdirSync(req.context.folder.log);
	}

	fs.appendFile(
		path.join(req.context.folder.log, logFileName), 
		logString , 
		() => next()
	);
}

export default log;