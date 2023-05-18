import { Weight } from '../model/schema';

async function createWeight(weight) {

    const dbWeight = new Weight(weight);
    await dbWeight.save();
    return dbWeight;
}

async function retrieveWeightList() {
    return await Weight.find();
}

async function retrieveWeight(id) {
    return await Weight.findById(id);
}

async function updateWeight(weight) {
    const dbWeight = await Weight.findOneAndUpdate({ _id: weight._id }, weight);
    return dbWeight !== undefined;
}

async function deleteWeight(id) {
    await Weight.deleteOne({ _id: id });
}

export {
    createWeight,
    retrieveWeight,
    retrieveWeightList,
    updateWeight,
    deleteWeight
}