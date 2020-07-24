﻿import fs from 'fs';
import SaxonJS from 'saxon-js';

/* GET request */
export const transformGet = (req, res) => {
	res.sendFile(req.context.dirname + '/views/transform.html',)
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