import mongoose from "mongoose";

const rezeptSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    zutaten: {
        type: [String],
        required: true
    },
    zubereitung: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
      },
});


 export const Rezept = mongoose.model('Rezept', rezeptSchema);