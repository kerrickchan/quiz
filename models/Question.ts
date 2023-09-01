import { Schema, model } from "mongoose"
import { IOption } from "@/models";

export { Question, type IQuestion }

interface IQuestion {
  _id?: string;
  code: string;
  text: string;
  order: number;
  required?: boolean;
  options: IOption[];
}

const questionSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    order: Number,
    required: Boolean,
    options: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Option',
      },
    ],
  },
)

const Question = model<IQuestion>("Question", questionSchema)
