import { MultipleChoiceProps } from "@/containers/MultipleChoice"

export const question = {
  question: 'What is your favorite color?',
  options: [
    { name: 'color', value: 'orange', text: 'Orange' },
    { name: 'color', value: 'purple', text: 'Purple' },
    { name: 'color', value: 'red', text: 'Red' },
    { name: 'color', value: 'white', text: 'White' },
  ],
}

export const questions = new Array(10).fill(question) as MultipleChoiceProps[]
