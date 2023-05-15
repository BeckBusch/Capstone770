import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { createDog } from './dogs-dao';
import { dummyDogs } from './random-dogs';
import { Dog } from './schema';

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
    console.log(`Cleared database (removed ${dogsDeleted.deletedCount} dogs).`);
}

async function addDogs() {
    for (let dummyDog of dummyDogs) {

        const dbDog = await createDog(dummyDog);
        console.log(`Dog '${dbDog.title}' added to database (_id = ${dbDog._id})`);

    }
}