import { MultipleChoiceProps } from "@/containers/MultipleChoice"
import { IQuestion } from "@/models"

export const options = [
  { question: {} as IQuestion, value: 'orange', text: 'Orange', order: 2 },
  { question: {} as IQuestion, value: 'purple', text: 'Purple', order: 3 },
  { question: {} as IQuestion, value: 'red', text: 'Red', order: 1 },
  { question: {} as IQuestion, value: 'white', text: 'White', order: 4 },
]

export const question: MultipleChoiceProps = {
  question: {
    code: 'color',
    text: 'What is your favorite color?',
    options,
    order: 1,
  },
  order: 0,
}

export const questions = new Array(10).fill(question)
questions[1].required = true
