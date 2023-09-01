import { Schema, model } from "mongoose"
import { IQuestion } from "@/models";

export { Answer, type IAnswer }

interface IAnswer {
  _id?: string;
  question: IQuestion;
  value: string;
}

const answerSchema = new Schema(
  {
    question: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
    },
    value: String,
  },
)

const Answer = model<IAnswer>("Answer", answerSchema)
