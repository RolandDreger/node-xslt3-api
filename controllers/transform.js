﻿import fs from 'fs';
import SaxonJS from 'saxon-js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));

/* GET request */
export const transformGet = (req, res) => {
	res.sendFile(__dirname + '/views/transform.html',)
};

/* POST request */
export const transformPost = (req, res) => {
	
	const { "stylesheet": stylesheetFileName } = req.query;
	const stylesheetFilePath = 'assets/xsl/' + stylesheetFileName;
	
	if(!fs.existsSync(stylesheetFilePath)) {
		res.status(404).send('The requested stylesheet does not exist!');
	}
	
	const stylesheet = fs.readFileSync(stylesheetFilePath);
	const source = req.rawBody;
	const params = { ...req.params };

	SaxonJS.transform({
			stylesheetText: stylesheet,
			sourceText: source,
			stylesheetParams: params,
			destination: "serialized",
			outputProperties:{ 
				method: "xml", 
				indent: false 
			}
		}, 
		"async"
	)
	.then(output => {
		res.set('Content-Type', 'text/xml');
		res.send(output.principalResult);
	})
	.catch(error => {
		console.log(error);
		res.status(400).send(error.message);
	});
};