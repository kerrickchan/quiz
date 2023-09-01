import { MultipleChoiceProps } from "@/containers/MultipleChoice"
import { IQuestion } from "@/models"

export { options, questions }

const options = [
  { question: {} as IQuestion, value: 'orange', text: 'Orange', order: 2 },
  { question: {} as IQuestion, value: 'purple', text: 'Purple', order: 3 },
  { question: {} as IQuestion, value: 'red', text: 'Red', order: 1 },
  { question: {} as IQuestion, value: 'white', text: 'White', order: 4 },
]

const question: MultipleChoiceProps = {
  order: 0, // runtime order
  name: '1color', // runtime name = expect order + code
  question: {
    code: 'color',
    text: 'What is your favorite color?',
    options,
    order: 1, // expect order
  },
}

const temp = new Array(10).fill(question) as MultipleChoiceProps[]
const questions = temp.map((q, i) => ({ question: q.question, order: i + 1, name: `${i + 1}color` }))
