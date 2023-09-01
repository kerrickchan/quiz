import { MultipleChoiceProps } from '@/containers';
import { createSlice } from '@reduxjs/toolkit';
import orderBy from 'lodash.orderby';

export { choose, init, quizReducer, reset, submit, type AnswerState };

interface AnswerState { [key: string]: string }

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [] as MultipleChoiceProps[],
    answers: {} as AnswerState,
    isSubmitting: false,
  },
  reducers: {
    init: (state, action) => {
      const { questions = [] } = action.payload
      const sortedQuestions = questions.map((q: MultipleChoiceProps, i: number) => {
        return {
          ...q,
          question: {
            ...q.question,
            options: orderBy(q.question.options, ['order'], ['asc']),
          },
          order: i + 1,
        }
      })
      return { ...state, questions: sortedQuestions }
    },
    reset: (state, action) => {
      return { ...state, answers: {}, isSubmitting: false }
    },
    choose: (state, action) => {
      const { name, value } = action.payload;
      const answers = { ...state.answers, [name]: value }
      return { ...state, answers }
    },
    submit: (state, action) => {
      const { questions } = state
      const answers = {} as AnswerState
      // TODO: fix submtting problem
      return { ...state, answers, isSubmitting: true }
    },
  },
})

// Action creators are generated for each case reducer function
const { init, choose, submit, reset } = quizSlice.actions

const quizReducer = quizSlice.reducer
