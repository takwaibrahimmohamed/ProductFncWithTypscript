import { InputHTMLAttributes } from "react"

interface Iprops extends InputHTMLAttributes<HTMLInputElement>{

}
const Input = ({...rest}:Iprops) => {
  return (
    <input type='text' className='border-gray-300 border-2 shadow-md
     focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg p-2 text-md' {...rest}/>
  )
}

export default Input
