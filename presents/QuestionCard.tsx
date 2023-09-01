'use client'

import { Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { ReactNode } from 'react';

export { QuestionCard, type QuestionCardProps };

interface QuestionCardProps {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

function QuestionCard({ header, body, footer }: QuestionCardProps) {
  return (
    <Card className='w-full h-fit duration-300 drop-shadow-md hover:drop-shadow-2xl'>
      <CardHeader className='p-4' color="deep-purple">
        {header}
      </CardHeader>
      <CardBody className='flex flex-col'>
        {body}
      </CardBody>
      <CardFooter color='red'>
        {footer}
      </CardFooter>
    </Card>
  );
};
