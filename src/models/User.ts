import mongoose from "mongoose";

const favFilmSchema = new mongoose.Schema({
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
  username: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, select: false },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    accountName: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      default: "",
    },
    profileImage: {
      type: String,
      default: "",
    },
    favouriteFilms: [favFilmSchema],
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
