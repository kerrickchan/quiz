import { OptionProps } from '@/presents/Option';
import { createSlice } from '@reduxjs/toolkit'

export interface Choice {
  question: string;
  options: OptionProps[];
  order: number;
  answer: string;
}

export interface ChoiceState {
  [key: string]: Choice;
}

export const choiceSlice = createSlice({
  name: 'choice',
  initialState: {
    quizzes: {} as ChoiceState,
  },
  reducers: {
    init: (state, action) => {
      state.quizzes = action.payload
    },
    choose: (state, action) => {
      state.quizzes[action.payload.index] = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { choose } = choiceSlice.actions

export const choiceReducer = choiceSlice.reducer
