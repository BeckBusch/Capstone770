import mongoose from 'mongoose';
import { Weight } from './weight-schema';

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    location: { type: String, required: true },
    prevWeights: { type: Array, items: [{ type: Weight }], additionalItems: true },
    image: { type: String}
}, {
    timestamps: {}
});
const Dog = mongoose.model('Dog', dogSchema);

export { Dog };