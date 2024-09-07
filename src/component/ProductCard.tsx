import { IProduct } from "../Interfaces"
import { sliceText } from "../utils/Text"
import Button from "./ui/Button"
import Image from "./Image"
import CircleColor from "./ui/CircleColor"
interface Iprops{
    product:IProduct,
    seteditProduct:(product:IProduct)=>void,
    setisEditOpen:(value:boolean)=>void
    idx:number
    seteditProductidx:(idx:number)=>void
    setOpenConfirmDelete:(value:boolean)=>void
}
const ProductCard = ({product,setisEditOpen,seteditProduct,seteditProductidx,idx,setOpenConfirmDelete}:Iprops) => {
const {title,description,image,price,category,colors}=product
const editCart=()=>{
  seteditProduct(product)
  setisEditOpen(true)
  seteditProductidx(idx)

}
const removeItem=()=>{
  seteditProduct(product)
  setOpenConfirmDelete(true)
}
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image src={image} 
    alt={category.name} className="mb-2 rounded-md h-full"/>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500 break-words">{sliceText(description)}</p>
    <div className="flex space-x-2 mt-3">
      {
        colors.map(color=><CircleColor key={color} bgColor={color} />)
      }
    </div>
  
    <div className="flex justify-between items-center">
        <span>{price}$</span>
        <Image src={category.image}
    alt={category.name} className="w-10 h-10 rounded-full object-center"/>
    </div>
    <div className="flex space-x-2 items-center mt-3">
        <Button className=" bg-indigo-700" width="w-full" onClick={editCart}>EDIT</Button>
        <Button className=" bg-red-700" width="w-full" onClick={removeItem}>DELETE</Button>
    </div>
    </div>
  )
}

export default ProductCard
