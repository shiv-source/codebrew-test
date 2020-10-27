const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fillingType: { type: String, default: null },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"],
    },
    location: {
      type: {
        type: String, 
        enum: ["Point"], 
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  { timestamps: true }
);

userSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("User", userSchema);
