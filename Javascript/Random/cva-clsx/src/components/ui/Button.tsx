import { cva, VariantProps } from "class-variance-authority"
import { cn } from "../../libs/utils"
import React from "react"

const buttonVariants = cva(
  "rounded-md font-semibold",
  {
    variants: {
      variant: {
        default: "bg-gray-700 text-gray-300",
        danger: "bg-red-300 text-gray-700",
        success: "bg-green-300 text-gray-700"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

// Como o props seria o Button só que com variantes, então podemos extender o tipo da tag Button e adicionar o tipo de buttonVariants, assim podemos acessar o className
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {};

function Button({ className, variant, size}: ButtonProps) {

  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
      Button
    </button>
  )
}

export default Button