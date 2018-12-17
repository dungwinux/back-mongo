import mongoose from "mongoose";
import dataModel from "../model/data";
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(
    MONGO_URL,
    err => {
        if (err) throw err;
        console.log("Successfully connected");
    }
);

export async function fetchData(query) {
    let words = {};
    console.log("Fetching...");
    return dataModel
        .find({})
        .then(doc => {
            words = doc;
            console.log("Fetch successfully from Database");
            return words;
        })
        .catch(err => {
            throw err;
        });
}

export function addData(data) {
    let sample = new dataModel(data);
    console.log("Adding data");
    sample.save(err => {
        if (err) throw err;
    });
}

export function delData(data) {
    dataModel.find(data).remove(err => {
        if (err) throw err;
    });
}
