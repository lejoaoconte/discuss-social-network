import { Schema, model, Document } from "mongoose";

interface UserInterface extends Document {
  name: string;
  github: string;
  password: string;
  email: string;
  role: string;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    github: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<UserInterface>("User", UserSchema);
