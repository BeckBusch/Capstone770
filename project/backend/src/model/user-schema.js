import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

const User = mongoose.model('User', userSchema);

export { User };