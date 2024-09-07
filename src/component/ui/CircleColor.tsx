import { HTMLAttributes } from "react"

interface Iprops extends HTMLAttributes<HTMLSpanElement>{
    bgColor:string
}
const CircleColor = ({bgColor,...rest} : Iprops) => {
  return (
    <span className="w-5 h-5 rounded-full cursor-pointer" style={{backgroundColor: bgColor}} {...rest}/>
  )
}

export default CircleColor
