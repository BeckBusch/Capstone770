/**
 * This is a simple RESTful API for dealing with chats.
 */

import express from 'express';
import {
    createChat,
    retrieveChat,
    retrieveChatList,
    updateChat,
    deleteChat
} from '../../service/chats-dao'

// const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// Create new chat
router.post('/', async (req, res) => {
    const newChat = await createChat(req.body);

    if (newChat) return res.status(HTTP_CREATED)
        .header('Location', `/api/chats/${newChat._id}`)
        .json(newChat);

    return res.sendStatus(422);
})

// Retrieve all chats
router.get('/', async (req, res) => {

    // Uncomment the following code to introduce an artificial delay before the response
    // is sent back to the client.
    // setTimeout(() => {
    //     res.json(retrieveChatList());
    // }, 2000);


    // When introducing the artificial delay, also comment this line. It's an error to send
    // two responses.
    res.json(await retrieveChatList());
});

// Retrieve single chat
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const chat = await retrieveChat(id);

    if (chat) return res.json(chat);
    return res.sendStatus(HTTP_NOT_FOUND);
});

// Update chat
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const chat = req.body;
    chat._id = id;
    const success = await updateChat(chat);
    res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

// Delete chat
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deleteChat(id);
    res.sendStatus(HTTP_NO_CONTENT);
});

export default router;