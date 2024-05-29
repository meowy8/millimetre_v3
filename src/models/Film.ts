import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  posterPath: {
    type: String,
    required: true,
  },
  filmId: {
    type: Number,
    required: true,
  },
});

const Film = mongoose.models.Film || mongoose.model("Film", filmSchema);

export default Film;
