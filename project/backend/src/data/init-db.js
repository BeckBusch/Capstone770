import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

import { createDog } from './dogs-dao';
import { createUser } from './user-dao';
import { Dog, User } from './schema'

main();

async function main() {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log('Connected to database!');
    console.log();

    await clearDatabase();
    console.log();

    await addDogs();
    console.log();

    // Disconnect when complete
    await mongoose.disconnect();
    console.log('Disconnected from database!');
}

async function clearDatabase() {
    const dogsDeleted = await Dog.deleteMany({});
    const usersDeleted = await User.deleteMany({});
    console.log(`Cleared database (removed ${dogsDeleted.deletedCount} dogs and  ${usersDeleted.deletedCount} users ).`);
}

const dogs = [
    { name: "Daisy", breed: "Maltese", gender: "Female", location: "Auckland", currentWeight:  [7.00, "2023-05-15", "Juwon Jung"] },
    { name: "Cookie", breed: "Beagle", gender: "Male", location: "Whangarei", currentWeight:  [10.00, "2023-02-16", "MinSun Kim"] },
]
  
async function addDogs() {
    for (let dog of dogs) {

        const dbDog = await createDog(dog);
        console.log(`Dog '${dbDog.title}' added to database (_id = ${dbDog._id})`);

    }
}

const users = [
    { name: "Juwon Jung", email: "juwon@mail.com", password: "juwon", role: "Vet", joined: "2023-05-15", image: "" },
    { name: "Min Sun Kim", email: "minsun@mail.com", password: "minsun", role: "Volunteer", joined: "2023-02-16", image: "" },
]

async function addUsers() {
    for (let user of users) {

        const dbUser = await createUser(user);
        console.log(`User '${dbUser.title}' added to database (_id = ${dbUser._id})`);

    }
}