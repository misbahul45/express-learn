import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    release_year: Number,
    genre:String
})

export default mongoose.model('Book', bookSchema)