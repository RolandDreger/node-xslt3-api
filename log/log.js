﻿import fs from 'fs';

const folderName = 'log';
const fileName = 'log.txt';

const log = (req, res, next) => {
	
	let logString = `
		Request Date: ${ new Date() }
		Host: ${ req.hostname }
		Path: ${ req.path }
		Method: ${ req.method }
		Params: ${ JSON.stringify(req.params) }
	`;

	if(!fs.existsSync('./'+ folderName)) {
		fs.mkdirSync('./'+ folderName);
	}

	fs.appendFile(
		'./' + folderName + '/' + fileName, 
		logString , 
		() => next()
	);
}

export default log;