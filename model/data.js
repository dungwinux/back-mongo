import mongoose from "mongoose";

let data = new mongoose.Schema(
    {
        word: String,
        id: Number
    },
    { timestamps: true }
);

const dataModel = mongoose.model("words", data);

export default dataModel;