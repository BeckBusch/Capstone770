import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    location: { type: String, required: true },
    currentWeight: { type: Array, items: [{ type: Number}, {type: Date}, {type: String}], additionalItems: false },
    prevWeights: { type: Array, items: [{ prevWeight: Array }], additionalItems: true },
    image: { type: String}
}, {
    timestamps: {}
});

const userSchema = new Schema({
    name: { type: String},
    email: { type: String},
    password: { type: String},
    role: { type: String},
    joined: { type: Date},
    image: { type: String}
}, {
    timestamps: {}
});

const Dog = mongoose.model('Dog', dogSchema);
const User = mongoose.model('User', userSchema);

export { Dog, User };