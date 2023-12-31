/**
 * This is a simple RESTful API for dealing with weights.
 */

import express from "express";
import {
    createWeight,
    retrieveWeight,
    retrieveWeightList,
    retrieveWeightDateList,
    updateWeight,
    deleteWeight
} from '../../service/weights-dao'


const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// Create new weight
router.post("/", async (req, res) => {
  const newWeight = await createWeight(req.body);

  if (newWeight)
    return res
      .status(HTTP_CREATED)
      .header("Location", `/api/weights/${newWeight._id}`)
      .json(newWeight);

  return res.sendStatus(422);
});

// Retrieve all weights
router.get("/", async (req, res) => {
  res.json(await retrieveWeightList());
});

// Retrieve date weights
router.get('/date', async (req, res) => {
    res.json(await retrieveWeightDateList());
});

// Retrieve single weight
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const weight = await retrieveWeight(id);

  if (weight) return res.json(weight);
  return res.sendStatus(HTTP_NOT_FOUND);
});

// Update weight
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const weight = req.body;
  weight._id = id;
  const success = await updateWeight(weight);
  res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

// Delete weight
router.delete("/:scaleID", async (req, res) => {
  const { scaleID } = req.params;
  await deleteWeight(scaleID);
  res.sendStatus(HTTP_NO_CONTENT);
});

export default router;
