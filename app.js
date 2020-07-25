﻿import express from 'express';
import xmlParser from 'express-xml-bodyparser';

import addContext from './middlewares/addContext.js';
import log from './middlewares/log.js';

import homeRoutes from './routes/home.js';
import transformRoutes from './routes/transform.js';


const app = express();
const PORT = process.env.PORT || 3000;

/* Parser */
app.use(xmlParser({ "includeWhiteChars":false }));

/* Static files */
app.use(express.static('assets'));

/* Context */
app.use(addContext);

/* Log */
/* app.use(log); */

/* Routes */
app.use('/', homeRoutes);
app.use('/transform', transformRoutes);
app.use((req, res) => res.redirect('/'));

/* Listeners */
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} ...`);
});