import { Typography } from "@material-tailwind/react";

export { Question, type QuestionProps }

interface QuestionProps {
  text: string;
}

function Question({ text }: QuestionProps) {
  return (
    <Typography variant="h3">{text}</Typography>
  )
}
