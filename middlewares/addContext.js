import path from 'path';
import { fileURLToPath } from 'url';

const addContext = (req, res, next) => {
	
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(path.dirname(__filename));
	
	req.context = {
		folder: {
			root: __dirname, /* root folder for absolute path */
			assets: 'assets',
			stylesheets: path.join('assets','xsl'),
			views: 'views',
			log:'log'
		}
	};
	
	next();
}

export default addContext;