import React from 'react'
import { twMerge } from "tailwind-merge";


const Button = (props) => {
  return (
    <div>

<button
      {...props}
      className={twMerge(
        "py-2 px-5  font-bold btn border-white rounded-md text-black bg-transparent hover:hover:bg-foreground-accent hover:text-white font-bold relative overflow-hidden cursor-pointer",
        props.className
      )}
    >
      <div className="absolute inset-0  transition-colors"></div>
      {props.disabled && (
        <div className="absolute inset-0 transition-colors " />
      )}
      {props.children}
    </button>

    </div>
  )
}

export default Button