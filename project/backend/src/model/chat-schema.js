import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const replySchema = new Schema({
    message: { type: String},
    postedBy: { type: Number},
}, {
    timestamps: {}
});

const chatSchema = new Schema({
    message: { type: String},
    postedBy: { type: Number},
    currentWeight: { type: Array, items: [{ type: replySchema}], additionalItems: true },
}, {
    timestamps: {}
});

const Chat = mongoose.model('Chat', chatSchema);

export { Chat };