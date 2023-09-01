'use client'

import { Option, Question, QuestionCard, QuestionProps, Warning } from '@/presents';
import { RootState, choose } from '@/stores';
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { ChangeEvent } from 'react';

export { MultipleChoice, type MultipleChoiceProps };

interface MultipleChoiceProps {
  name: string; // runtime name
  order: number; // runtime order
  question: QuestionProps;
}

function MultipleChoice({ name, order, question }: MultipleChoiceProps) {
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state: RootState) => state.quiz.answers);

  const { options, required = false } = question;
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const payload = { name, value: evt.target.value };
    dispatch(choose(payload))
  }

  return (
    <QuestionCard
      header={<Question {...question} text={`${order}. ${question.text}`} />}
      body={
        options.map(({ text, value }) => {
          return (
            <Option
              key={name + value}
              name={name}
              value={value}
              text={text}
              onChange={handleChange}
            />
          )
        })
      }
      footer={required && !answers[order - 1] && <Warning text='Please select an option !' />}
    />
  );
};
