import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      required: true,
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "recruiter"],
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String },
      resumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timeStamps: true });

export const User = mongoose.model("User", userSchema);
