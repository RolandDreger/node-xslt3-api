﻿import { join } from 'path';
import SaxonJS from 'saxon-js';


/* GET request */
export const transformGet = (req, res) => {
	const transformViewFilePath = join(req.context.folder.root, req.context.folder.views, 'transform.html')
	res.sendFile(transformViewFilePath);
};

/* POST request */
export const transformPost = (req, res) => {
	
	const { "stylesheet": stylesheetFileName } = req.query;
	
	const stylesheetFilePath = join(req.context.folder.stylesheets, stylesheetFileName);
	const source = req.rawBody;
	const params = { ...req.params };
	
	SaxonJS.transform({
			stylesheetFileName: stylesheetFilePath,
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