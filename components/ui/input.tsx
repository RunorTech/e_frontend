import * as React from "react"
import { FaEye } from "react-icons/fa6";
import { cn } from "@/lib/utils"
import { PiEyeClosedBold } from "react-icons/pi";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { 
    label: string,
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, name, value, onChange, type, ...props }, ref) => {

    const [seePassword, setSeePassword] = React.useState(false);
    return (
      <fieldset className={cn(
        "  justify-center border border-input px-2 pb-2 rounded-md shadow-md shadow-slate-400 dark:shadow-sm ",
        className
      )}>
        <legend className=" px-2 pr-4">{`${label}:`}</legend>
        <label htmlFor={label}>
          <div className="flex items-center">
            <input
              onChange={onChange}
              value={value}
              name={name}
              type={`${type === "password" ? `${seePassword ? "text" : type}` : type}`}
              className={cn(
                " input-style outline-none   ",
                className
              )}
              ref={ref}
              {...props}
            />
            <div>
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
