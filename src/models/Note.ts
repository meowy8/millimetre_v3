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
      required: true,
    },
    posterPath: {
      type: String,
    },
    backdropPath: {
      type: String,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
