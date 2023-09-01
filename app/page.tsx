'use client'

import { MultipleChoice, MultipleChoiceProps } from "@/containers";
import { useQuestions } from "@/hooks";
import { Submit } from "@/presents";
import { RootState, init, submit, useAppDispatch, useAppSelector } from "@/stores";
import { MouseEvent, useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state: RootState) => state.quiz.answers);
  const questions = useQuestions();
  // const questions = useAppSelector((state: RootState) => state.quiz.questions);

  useEffect(() => {
    dispatch(init({ questions }));
  }, [])

  const handleSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    console.log(answers);
    dispatch(submit({}));
  }

  return (
    <main className="min-h-screen grid grid-flow-row gap-y-24 p-24">
      {
        questions
          .map(
            (q: MultipleChoiceProps) => {
              return (
                <MultipleChoice
                  key={q.name}
                  name={q.name}
                  question={q.question}
                  order={q.order}
                />
              )
            }
          )
      }
      <Submit onClick={handleSubmit} />
    </main>
  )
}
