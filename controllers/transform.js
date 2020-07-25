﻿import fs from 'fs';
import path from 'path';
import SaxonJS from 'saxon-js';


/* GET request */
export const transformGet = (req, res) => {
	const transformViewFilePath = path.join(req.context.folder.root, req.context.folder.views, 'transform.html')
	res.sendFile(transformViewFilePath);
};

/* POST request */
export const transformPost = (req, res) => {
	
	const { "stylesheet": stylesheetFileName } = req.query;
	const stylesheetFilePath = path.join(req.context.folder.stylesheets, stylesheetFileName);
	
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
		/* console.error(error); */
		res.status(400).send(error.message);
	});
};