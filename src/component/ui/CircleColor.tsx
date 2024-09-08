import { HTMLAttributes } from "react"

interface Iprops extends HTMLAttributes<HTMLSpanElement>{
    bgColor:string
}
const CircleColor = ({bgColor,...rest} : Iprops) => {
  return (
    <span className="w-3 h-3 md:w-5 md:h-5 rounded-full cursor-pointer" style={{backgroundColor: bgColor}} {...rest}/>
  )
}

export default CircleColor
