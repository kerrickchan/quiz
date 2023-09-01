'use client'

import { Button, ButtonProps } from "@material-tailwind/react";

export { Submit, type SubmitProps }

interface SubmitProps extends Omit<ButtonProps, 'children' | 'ref'> {
}

function Submit(props: SubmitProps) {
  return (
    <Button type="submit" color="deep-purple" className="w-full duration-300 drop-shadow-md hover:drop-shadow-2xl" { ...props }>
      Submit
    </Button>
  )
}
