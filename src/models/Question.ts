import { Schema, model, Document } from "mongoose";

export interface IOptions {
  optionValue: string;
  optionName: string;
}

export interface IQuestion extends Document {
  questionValue: string;
  question: string;
  options: IOptions[];
  correctOption: string;
}

const QuestionSchema = new Schema<IQuestion>({
  questionValue: String,
  question: String,
  options: [{ optionValue: String, optionName: String }],
  correctOption: String,
});

export default model<IQuestion>("Question", QuestionSchema);
