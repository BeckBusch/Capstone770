import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    summary: { type: String},
    discussion: { type: String},
    userName: { type: String},
    userRole: { type: String},
    replies: { type: Array, additionalItems: true}
}, {
    timestamps: {}
});

const Chat = mongoose.model('Chat', chatSchema);

export { Chat };