import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { UserType } from "../shared/types";


const userSchema = new mongoose.Schema({
  // mongoose schema capital S in string
  rollNo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});


const User = mongoose.model<UserType>("User", userSchema);

export default User;
