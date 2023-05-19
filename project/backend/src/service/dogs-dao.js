import { Dog } from "../model/dog-schema";

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

async function sortAToZ() {
  const sortDog = await Dog.find().sort({ name: 1 });
  return await sortDog;
}

async function sortZToA() {
  const sortDog = await Dog.find().sort({ name: -1 });
  return await sortDog;
}

async function searchDog(searchValue) {
  const searchedDog = await Dog.find({
    $or: [
      { name: { $regex: searchValue, $options: "i" } },
      { breed: { $regex: searchValue, $options: "i" } },
      { location: { $regex: searchValue, $options: "i" } },
    ],
  });
  return await searchedDog;
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
  sortAToZ,
  sortZToA,
  searchDog,
  updateDog,
  deleteDog,
};
