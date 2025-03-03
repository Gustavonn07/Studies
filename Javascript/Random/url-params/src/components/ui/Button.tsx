import { cn } from "../../libs/utils"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string
  handler: () => void
}

function Button({ className, handler, texto }: ButtonProps) {

  return (
    <button 
      className={cn('rounded-md font-semibold bg-gray-700 text-gray-300 h-10 px-4 py-2', className)}
      onClick={handler}
    >
      {texto}
    </button>
  )
}

export default Button;