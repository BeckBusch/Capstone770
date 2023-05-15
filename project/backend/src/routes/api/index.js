import express from 'express';

const router = express.Router();

import dogs from './dogs';
router.use('/dogs', dogs);

import images from './images';
router.use('/images', images);

export default router;