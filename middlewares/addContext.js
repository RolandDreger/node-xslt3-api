import { dirname } from 'path';
import { fileURLToPath } from 'url';

const addContext = (req, res, next) => {
	
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(dirname(__filename));
	
	req.context = {
		dirname: __dirname /* root folder for absolute path */
	};
	
	next();
}

export default addContext;