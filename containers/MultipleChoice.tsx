'use client'

import { Option } from '@/presents/Option';
import { Question, QuestionProps } from '@/presents/Question';
import { Warning } from '@/presents/Warning';
import { RootState, choose } from '@/stores';
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { ChangeEvent } from 'react';

export { MultipleChoice, type MultipleChoiceProps };

interface MultipleChoiceProps {
  question: QuestionProps;
  order: number;
}

function MultipleChoice({ question, order }: MultipleChoiceProps) {
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state: RootState) => state.quiz.answers);

  const { code, options, required = false } = question;
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const payload = { order, code, value: evt.target.value };
    dispatch(choose(payload))
  }

  return (
    <Card className='w-full h-fit hover:drop-shadow-xl duration-300'>
      <CardHeader className='p-4' color="deep-purple">
        <Question {...question} text={`${order}. ${question.text}`} />
      </CardHeader>
      <CardBody className='flex flex-col'>
        {
          options.map(({ text, value }) => {
            return (
              <Option
                key={order + code + value}
                value={value}
                name={order + code}
                text={text}
                onChange={handleChange}
              />
            )
          })
        }
      </CardBody>
      {
        required && !answers[order - 1] && (
          <CardFooter color='red'>
            <Warning text='Please select an option !' />
          </CardFooter>
        )
      }
    </Card>
  );
};
