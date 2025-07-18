import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  salary: Number,
  dob: String,
  status: String,
  avatar: String,
});

// Remove existing compiled model to avoid schema cache issues
mongoose.models.User && delete mongoose.models.User;

const User = mongoose.model("User", UserSchema);

export default User;
