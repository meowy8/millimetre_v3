import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    filmId: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
    },
    posterPath: {
      type: String,
    },
    backdropPath: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
