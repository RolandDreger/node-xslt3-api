﻿import express from 'express';
import { transformGet, transformPost } from '../controllers/transform.js';

const router = express.Router();

router.get('/', transformGet);
router.post('/:mode?', transformPost);

export default router;