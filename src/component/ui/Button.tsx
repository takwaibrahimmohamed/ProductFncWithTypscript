import { ButtonHTMLAttributes, ReactNode } from "react"

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    className?:string,
    width?: 'w-full' | "w-fit"
}
const Button = ({children,className,width="w-full",...rest}:Iprops) => {
  return (
     <button className={`${className} p-2 ${width} text-white rounded-md`}  {...rest}>{children}</button>
    
  )
}

export default Button
