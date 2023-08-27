import { createSlice } from '@reduxjs/toolkit'

export { quizReducer, choose }

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    answers: {} as { [key: number]: string },
  },
  reducers: {
    reset: (state, action) => {
      return { ...state, answers: new Array(action.payload.questions.length).fill('required') }
    },
    choose: (state, action) => {
      const { order, value } = action.payload;
      const answers = { ...state.answers, [order]: value }
      return { ...state, answers }
    },
  },
})

// Action creators are generated for each case reducer function
const { choose } = quizSlice.actions

const quizReducer = quizSlice.reducer
