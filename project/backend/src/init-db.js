import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

export async function main() {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log('Connected to database!');
    console.log();
}