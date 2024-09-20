import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className,name, type, ...props }, ref) => {
    return (
    <fieldset  className={cn(
          "  justify-center border border-input px-2 pb-2 rounded-md shadow-md",
          className
        )}>
      <legend className="text-black px-2 pr-4">{name}</legend>
      <label htmlFor={name}>
      <input
        type={type}
        className={cn(
          " input-style outline-none   ",
          className
        )}
        ref={ref}
        {...props}
      />
      </label>
    </fieldset>
    )
  }
)
Input.displayName = "Input"

export { Input }
