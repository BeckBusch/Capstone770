import { Dog } from '../model/schema';

async function createDog(dog) {

    const dbDog = new Dog(dog);
    await dbDog.save();
    return dbDog;
}

async function retrieveDogList() {
    return await Dog.find();
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
    deleteDog
}