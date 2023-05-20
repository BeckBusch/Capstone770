/**
 * This is a simple RESTful API for dealing with dogs.
 */

import express from "express";
import {
  createDog,
  retrieveDog,
  retrieveDogList,
  updateDog,
  deleteDog,
  sortAToZ,
  sortZToA,
  searchDog,
} from "../../service/dogs-dao";

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// Create new dog
router.post("/", async (req, res) => {
  const newDog = await createDog(req.body);

  if (newDog)
    return res
      .status(HTTP_CREATED)
      .header("Location", `/api/dogs/${newDog._id}`)
      .json(newDog);

  return res.sendStatus(422);
});

// Retrieve all dogs
router.get("/", async (req, res) => {
  res.json(await retrieveDogList());
});

// Retrieve single dog
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const dog = await retrieveDog(id);

  if (dog) return res.json(dog);
  return res.sendStatus(HTTP_NOT_FOUND);
});

// Retrieve sort dogs (A to Z)
router.get("/sort-a-to-z", async (req, res) => {
  res.json(await sortAToZ());
});

// Retrieve sort dogs (Z to A)
router.get("/sort-z-to-a", async (req, res) => {
  res.json(await sortZToA());
});

// Retrieve search dogs
router.get("/search/:string", async (req, res) => {
  const { string } = req.params;
  res.json(await searchDog(string));
});

// Update dog
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const dog = req.body;
  dog._id = id;
  const success = await updateDog(dog);
  res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

// Delete dog
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await deleteDog(id);
  res.sendStatus(HTTP_NO_CONTENT);
});

export default router;
