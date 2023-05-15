import express from 'express';

const router = express.Router();

import dogs from './dogs';
router.use('/dogs', dogs);

import users from './users';
router.use('/users', users);

import images from './images';
router.use('/images', images);

export default router;