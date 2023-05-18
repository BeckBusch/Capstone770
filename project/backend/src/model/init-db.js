import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

import { createDog } from '../service/dogs-dao';
import { createUser } from '../service/users-dao';
import { Dog, User } from '../model/schema'

export async function main() {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log('Connected to database!');
    console.log();

    // await clearDatabase();
    // console.log();

    // await addDogs();
    // console.log();

    // await addUsers();
    // console.log();

    // Disconnect when complete
    // await mongoose.disconnect();
    // console.log('Disconnected from database!');
    
    // await sortDatabase();
    // console.log("Sorted database");

}

async function clearDatabase() {
    const dogsDeleted = await Dog.deleteMany({});
    const usersDeleted = await User.deleteMany({});
    console.log(`Cleared database (removed ${dogsDeleted.deletedCount} dogs and ${usersDeleted.deletedCount} users ).`);
}

async function sortDatabase() {
    const dogsDeleted = await Dog.find({}, {_id:0, name:1, breed:1, age:1, gender:1, location:1, currentWeight:1, prevWeights:1}).sort({"age": 1});
    // const dogsDeleted = await Dog.find({});
    console.log(`Dog database sorted alphabetically name`, dogsDeleted);

//     const test = await Dog.insertMany([
//         {
//         name: "Test",
//         breed: "breedTest",
//         age: 9,
//         gender: "Female",
//         location: "Christchurch",
//         currentWeight: ["hello", "hi"],
//         prevWeights: []
//         },
//         {
//             name: "Test2",
//             breed: "breedTes2",
//             age: 10,
//             gender: "Female",
//             location: "Christchurch",
//             currentWeight: ["hello2", "hi2"],
//             prevWeights: []
//         }

// ]);
    // const test = await Dog.insertMany({dogsDeleted});
    const deleted = await Dog.deleteMany({});
    console.log(`Cleared database (removed ${deleted.deletedCount} dogs).`);
    const userDeleted = await Dog.insertMany(dogsDeleted);
    console.log(`Dog database inserted`, userDeleted);

    
    // const test = await Dog.insertMany({name :"Max", breed: "Poodle", gender: "male", age: 1, location: "wellington"});
    // const test = await Dog.update(sort({"name": 1}));

    // console.log("Store results as an array!");

    // const userDeleted = await Dog.insertMany(dogsDeleted);
    // console.log(`Database replaced`);
}

// const dogs = [
//     { name: "Daisy", breed: "Maltese", gender: "Female", location: "Auckland", currentWeight:  [7.00, "2023-05-15", "Juwon Jung"], prevWeights: [] },
//     { name: "Cookie", breed: "Beagle", gender: "Male", location: "Whangarei", currentWeight:  [10.00, "2023-02-16", "MinSun Kim"] },
// ]
  
// async function addDogs() {
//     for (let dog of dogs) {
//         const dbDog = await createDog(dog);
//         console.log(`Dog '${dbDog.name}' added to database (_id = ${dbDog._id})`);
//     }
// }

// const users = [
//     { name: "Juwon Jung", email: "juwon@mail.com", password: "juwon", role: "Vet", joined: "2023-05-15", image: "" },
//     { name: "Min Sun Kim", email: "minsun@mail.com", password: "minsun", role: "Volunteer", joined: "2023-02-16", image: "" },
// ]

// async function addUsers() {
//     for (let user of users) {
//         const dbUser = await createUser(user);
//         console.log(`User '${dbUser.name}' added to database (_id = ${dbUser._id})`);
//     }
// }