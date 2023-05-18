/**
 * This is a simple RESTful API for dealing with dogs.
 */

import express from 'express';
import {
    createDog,
    retrieveDog,
    retrieveDogList,
    updateDog,
    deleteDog,
    sortDogList,
    sortDogList2
} from '../../service/dogs-dao';

// const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// Create new dog
router.post('/', async (req, res) => {
    const newDog = await createDog(req.body);

    if (newDog) return res.status(HTTP_CREATED)
        .header('Location', `/api/dogs/${newDog._id}`)
        .json(newDog);

    return res.sendStatus(422);
})

// Retrieve all dogs
router.get('/', async (req, res) => {

    // Uncomment the following code to introduce an artificial delay before the response
    // is sent back to the client.
    // setTimeout(() => {
    //     res.json(retrieveDogList());
    // }, 2000);


    // When introducing the artificial delay, also comment this line. It's an error to send
    // two responses.
    res.json(await retrieveDogList());
});

// Retrieve sort dogs
router.get('/sort', async (req, res) => {
    res.json(await sortDogList());
});

router.get('/sort2', async (req, res) => {
    res.json(await sortDogList2());
});

// Retrieve single dog
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const dog = await retrieveDog(id);

    if (dog) return res.json(dog);
    return res.sendStatus(HTTP_NOT_FOUND);
});

// Update dog
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const dog = req.body;
    dog._id = id;
    const success = await updateDog(dog);
    res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

// Delete dog
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deleteDog(id);
    res.sendStatus(HTTP_NO_CONTENT);
});

export default router;