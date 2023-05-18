import { Dog } from '../model/schema';

async function createDog(dog) {

    const dbDog = new Dog(dog);
    await dbDog.save();
    return dbDog;
}

async function retrieveDogList() {
    return await Dog.find();
}

async function sortAToZ() {
    const sortDog = await Dog.find({}, {_id:0, name:1, breed:1, age:1, gender:1, location:1, currentWeight:1, prevWeights:1}).sort({"name": 1});
    console.log("sorted dog list: ", sortDog);

    const deleted = await Dog.deleteMany({});
    console.log(`Cleared dog database`);
    const userDeleted = await Dog.insertMany(sortDog);
    console.log(`Dog database inserted`, userDeleted);

    return await sortDog;
}

async function sortZToA() {
    const sortDog = await Dog.find({}, {_id:0, name:1, breed:1, age:1, gender:1, location:1, currentWeight:1, prevWeights:1}).sort({"name": -1});
    console.log("sorted dog list: ", sortDog);

    const deleted = await Dog.deleteMany({});
    console.log(`Cleared dog database`);
    const userDeleted = await Dog.insertMany(sortDog);
    console.log(`Dog database inserted`, userDeleted);

    return await sortDog;
}

async function retrieveDog(id) {
    return await Dog.findById(id);
}

async function updateDog(dog) {

    const dbDog = await Dog.findOneAndUpdate({ _id: dog._id }, dog);
    return dbDog !== undefined;
}

async function deleteDog(id) {
    await Dog.deleteOne({ _id: id });
}

export {
    createDog,
    retrieveDog,
    retrieveDogList,
    updateDog,
    deleteDog,
    sortAToZ,
    sortZToA
}