import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    location: { type: String, required: true },
    prevWeights: { type: Array, items: [{ type: Number}, {type: Date}, {type: String}], additionalItems: false }
}, {
    timestamps: {}
});

const Dog = mongoose.model('Dog', dogSchema);

export { Dog };