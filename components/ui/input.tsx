import * as React from "react"
import { FaEye } from "react-icons/fa6";
import { cn } from "@/lib/utils"
import { PiEyeClosedBold } from "react-icons/pi";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, type, ...props }, ref) => {

    const [seePassword, setSeePassword] = React.useState(false);
    return (
      <fieldset className={cn(
        "  justify-center border border-input px-2 pb-2 rounded-md shadow-md",
        className
      )}>
        <legend className="text-black px-2 pr-4">{`${name}:`}</legend>
        <label htmlFor={name}>
          <div className="flex items-center">
            <input
              type={`${type === "password" ? `${seePassword ? "text" : type}` : type}` }
              className={cn(
                " input-style outline-none   ",
                className
              )}
              ref={ref}
              {...props}
            />
            <div className="text-black">
              {type === "password" ? <div
              onClick={() => {
                setSeePassword((prev) => !prev)
              }}
              >
                 {seePassword ? <PiEyeClosedBold /> : <FaEye />}
              </div> : null}
            </div>
          </div>
        </label>
      </fieldset>
    )
  }
)
Input.displayName = "Input"

export { Input }
