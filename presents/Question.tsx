import { IQuestion } from "@/models";
import { Typography } from "@material-tailwind/react";

export { Question, type QuestionProps }

interface QuestionProps extends IQuestion {
}

function Question({ text }: QuestionProps) {
  return (
    <Typography variant="h3">{text}</Typography>
  )
}
