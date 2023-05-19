import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const weightSchema = new Schema({
    weight: { type: Number},
    scaleId: { type: Number},
    dateWeighed: { type: Date},
    staff: { type: String},
    staffRole: { type: String},
}, {
    timestamps: {}
});

const Weight = mongoose.model('Weight', weightSchema);

export { Weight };