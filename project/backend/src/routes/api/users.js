/**
 * This is a simple RESTful API for dealing with users.
 */

import express from "express";
import {
  createUser,
  retrieveUser,
  retrieveUserList,
  getAdmins,
  getVets,
  getVolunteers,
  searchUser,
  updateUser,
  deleteUser,
} from "../../service/users-dao";

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// Create new user
router.post("/", async (req, res) => {
  const newUser = await createUser(req.body);

  if (newUser)
    return res
      .status(HTTP_CREATED)
      .header("Location", `/api/users/${newUser._id}`)
      .json(newUser);

  return res.sendStatus(422);
});

// Retrieve all users
router.get("/", async (req, res) => {
  res.json(await retrieveUserList());
});

// Retrieve single user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await retrieveUser(id);

  if (user) return res.json(user);
  return res.sendStatus(HTTP_NOT_FOUND);
});

// Retrieve admin users
router.get("/filter/admins", async (req, res) => {
  res.json(await getAdmins());
});

// Retrieve vet users
router.get("/filter/vets", async (req, res) => {
  res.json(await getVets());
});

// Retrieve volunteer users
router.get("/filter/volunteers", async (req, res) => {
  res.json(await getVolunteers());
});

// Retrieve search users
router.get("/search/:string", async (req, res) => {
  const { string } = req.params;
  res.json(await searchUser(string));
});

// Update user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  user._id = id;
  const success = await updateUser(user);
  res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

// Delete user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await deleteUser(id);
  res.sendStatus(HTTP_NO_CONTENT);
});

export default router;
