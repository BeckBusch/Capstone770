import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    location: { type: String, required: true },
    currentWeight: { type: Array, items: [{ type: Number}, {type: Date}, {type: String}], additionalItems: false },
    prevWeights: { type: Array, items: [{ prevWeight: Array }], additionalItems: true }
}, {
    timestamps: {}
});

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    joined: { type: Array, required: true },
    imageUrl: { type: String, required: false}
}, {
    timestamps: {}
});

const Dog = mongoose.model('Dog', dogSchema);
const User = mongoose.model('User', userSchema);

export { Dog, User };