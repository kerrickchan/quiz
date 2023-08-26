'use client'

import { Option, OptionProps } from '@/presents/Option';
import { Question } from '@/presents/Question';
import { Warning } from '@/presents/Warning';
import { Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';

export { MultipleChoice, type MultipleChoiceProps };

interface MultipleChoiceProps {
  sequence: number;
  question: string;
  options: Pick<OptionProps, 'name' | 'text' | 'value'>[];
}

function MultipleChoice({ sequence, question, options }: MultipleChoiceProps) {
  const [checked, setChecked] = useState<string | null>(null);

  return (
    <Card className='w-full h-fit'>
      <CardHeader className='p-4' color="deep-purple">
        <Question text={`${sequence}. ${question}`} />
      </CardHeader>
      <CardBody className='flex flex-col'>
        {
          options.map((option) => (
            <Option
              key={option.value + sequence}
              value={option.value}
              name={option.name + sequence}
              text={option.text}
              checked={option.value === checked}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => {
                  return setChecked(event.target.value)
                }
              }
            />
          ))
        }
      </CardBody>
      {
        checked === 'requried' && (
          <CardFooter color='red'>
            <Warning text='Please select an option !' />
          </CardFooter>
        )
      }
    </Card>
  );
};
