'use client'

import { Option, OptionProps } from '@/presents/Option';
import { Question } from '@/presents/Question';
import { Warning } from '@/presents/Warning';
import { Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { ChangeEvent, use, useState } from 'react';
import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { RootState, choose } from '@/stores';

export { MultipleChoice, type MultipleChoiceProps };

interface MultipleChoiceProps {
  question: string;
  order: number;
  options: Pick<OptionProps, 'name' | 'text' | 'value'>[];
}

function MultipleChoice({ order, question, options }: MultipleChoiceProps) {
  const answer = useAppSelector((state: RootState) => state.choose.quizzes[order]?.answer ?? 'required');
  const dispatch = useAppDispatch();

  return (
    <Card className='w-full h-fit hover:drop-shadow-xl duration-300'>
      <CardHeader className='p-4' color="deep-purple">
        <Question text={`${order}. ${question}`} />
      </CardHeader>
      <CardBody className='flex flex-col'>
        {
          options.map((option) => (
            <Option
              key={option.value + order}
              value={option.value}
              name={option.name + order}
              text={option.text}
              checked={option.value === answer}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => dispatch(choose({ order, value: event.target.value }))
              }
            />
          ))
        }
      </CardBody>
      {
        answer === 'requried' && (
          <CardFooter color='red'>
            <Warning text='Please select an option !' />
          </CardFooter>
        )
      }
    </Card>
  );
};
