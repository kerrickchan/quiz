import { MultipleChoice, MultipleChoiceProps } from "@/containers/MultipleChoice";
import { questions } from "@/test/questions"; // FIMXE: mock data

export default function Home() {
  return (
    <main className="min-h-screen grid grid-flow-row gap-y-24 p-24">
      {
        questions.map(
          (q: MultipleChoiceProps, i: number) =>
            <MultipleChoice key={q.order} {...q} order={i +1} />
        )
      }
    </main>
  )
}
