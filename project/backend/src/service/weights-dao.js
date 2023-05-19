import { Weight } from "../model/weight-schema";

async function createWeight(weight) {
  const dbWeight = new Weight(weight);
  await dbWeight.save();
  return dbWeight;
}

async function retrieveWeightList() {
  return await Weight.find();
}

async function retrieveWeightDateList() {
    const current = await Weight.find({}, { _id:0, createdAt: 1})
    return await current;
}

async function retrieveWeight(id) {
  return await Weight.findById(id);
}

async function updateWeight(weight) {
  const dbWeight = await Weight.findOneAndUpdate({ _id: weight._id }, weight);
  return dbWeight !== undefined;
}

async function deleteWeight(scaleID) {
  await Weight.deleteMany({ scaleId: scaleID });
}

export {
    createWeight,
    retrieveWeight,
    retrieveWeightList,
    retrieveWeightDateList,
    updateWeight,
    deleteWeight
}
