import { Schema, model, Document } from "mongoose";

interface PostInterface extends Document {
  content: string;
  likes: Number;
  user: string;
}

const PostSchema = new Schema(
  {
    content: { type: String, required: true },
    likes: { type: Number, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<PostInterface>("Post", PostSchema);
