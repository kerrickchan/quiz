import { MultipleChoice, MultipleChoiceProps } from "@/containers/MultipleChoice";
import { questions} from "@/test/questions"; // FIMXE: mock data
import { Metadata } from "next";

export const meta: Metadata = {
  title: 'Quiz',
  description: 'NextJS 13 Quiz App',
}

export default function Home() {
  return (
    <main className="min-h-screen grid grid-flow-row gap-y-24 p-24">
      {
        questions.map(
          (q: MultipleChoiceProps, i: number) => {
            return (
              <MultipleChoice
                key={q.question.code + i.toString()}
                question={q.question}
                order={i + 1}
              />
            )
          }
        )
      }
    </main>
  )
}
