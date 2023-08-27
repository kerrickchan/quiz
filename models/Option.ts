import { Schema, model } from "mongoose"
import { IQuestion } from "@/models";

export { Option, type IOption }

interface IOption {
  question: IQuestion;
  text: string;
  value: string;
  order: number;
}

const optionSchema = new Schema(
  {
    question: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
    },
    text: String,
    value: String,
    order: Number,
  },
)

const Option = model<IOption>("Option", optionSchema)
