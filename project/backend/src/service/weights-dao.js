import { Weight } from '../model/schema';

async function createWeight(weight) {

    const dbWeight = new Weight(weight);
    await dbWeight.save();
    return dbWeight;
}

async function retrieveWeightList() {
    const current = await Weight.find()
    // console.log("Weight: ", current);
    return await current;
}

async function retrieveWeightDateList() {
    const current = await Weight.find({}, { _id:0, createdAt: 1})
    // console.log("Weight Date: ", current);
    return await current;
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
    retrieveWeightDateList,
    updateWeight,
    deleteWeight
}