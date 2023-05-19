import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    summary: { type: String},
    discussion: { type: String},
    user: { type: String},
}, {
    timestamps: {}
});

const Chat = mongoose.model('Chat', chatSchema);

export { Chat };