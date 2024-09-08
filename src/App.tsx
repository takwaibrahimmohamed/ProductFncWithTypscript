
import './App.css'
import ProductCard from './component/ProductCard'
import Button from './component/ui/Button'
import Input from './component/ui/Input'
import Modal from './component/ui/Modal'
import { category, ColorCircle, FormInputList, ProductList } from './data'
import {ChangeEvent, useState, FormEvent } from 'react'
import { IProduct } from './Interfaces'
import { Validation } from './component/validation/Index'
import ErrorMsg from './component/errors/ErrorMsg'
import CircleColor from './component/ui/CircleColor'
import { v4 as uuid } from 'uuid'
import Select from './component/ui/Select'
import { TproductName } from './types'
import toast, { Toaster } from 'react-hot-toast';
import Home from './component/Home'

function App() {
  const defaultProduct={
    title: "",
    description: "",
    image: "",
    price: "",
    colors:[],
    category: {
        name: "",
        image: ""
    }

  }
  const [allproduct,setallproduct]=useState<IProduct[]>(ProductList)
  const [product,setProduct]=useState<IProduct>(defaultProduct)
  const [selected, setSelected] = useState(category[0])
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setisEditOpen] = useState(false)
  const [OpenConfirmDelete, setOpenConfirmDelete] = useState(false)
  const [editProduct, seteditProduct] = useState<IProduct>(defaultProduct)
  const [editProductidx, seteditProductidx] = useState<number>(0)
  const [errorMsg, seterrorMsg] = useState({
      title: "",
      description: "",
      image: "",
      price: "",
      
    })
  const [temp,setTemp] = useState<string[]>([])

  function closeModal() {
    setIsOpen(false)
  }
  
  function openModal() {
    setIsOpen(true)
  }
  function closeEditModal() {
    setisEditOpen(false)
  }

  // function openEditModal() {
  //   setisEditOpen(true)
  // }
  function closeconfirmDeleteModal() {
    setOpenConfirmDelete(false)
  }

  // function openconfirmDeleteModal() {
  //   setOpenConfirmDelete(true)
  // }
  const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
const {value,name}=event.target
setProduct({
  ...product,
  [name]:value
})
seterrorMsg({
  ...errorMsg,
  [name]:""
})
  }
  const onChangeEditHandler=(event:ChangeEvent<HTMLInputElement>)=>{
const {value,name}=event.target
seteditProduct({
  ...editProduct,
  [name]:value
})
seterrorMsg({
  ...errorMsg,
  [name]:""
})
  }

const submitHandler=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault()
  const {title,description,image,price} = product
  console.log(allproduct)
  const errors = Validation({
    title,
    description,
    image,
    price,
 
  })

const hasErrorMsg=Object.values(errors).some(value=>value==="")&&Object.values(errors).every(value=>value==="")
if(!hasErrorMsg)
 {
  seterrorMsg(errors)
  return
 }

else{
  setallproduct(prev=>[{...product,id:uuid(),colors:temp,category:selected},...prev])
  setProduct(defaultProduct)
  setTemp([])
  closeModal()
  toast('Product Has Been Added',{
    duration: 4000,
    position: 'top-center',
    icon: '👋🏼',
    style:{
      zIndex:"111",
  backgroundColor:"black",
  color:"white"
    }
  
  })
  console.log(product)
}

}
const submitEditHandler=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault()
  const {title,description,image,price} = editProduct
 
  const errors = Validation({
    title,
    description,
    image,
    price,
 
  })

const hasErrorMsg=Object.values(errors).some(value=>value==="")&&Object.values(errors).every(value=>value==="")
if(!hasErrorMsg)
 {
  seterrorMsg(errors)
 
  return
 }

else{
  seteditProduct(defaultProduct)
  const UpdatedProduct = [...allproduct]
  console.log(temp.concat(editProduct.colors))
  UpdatedProduct[editProductidx] = {...editProduct,colors:temp.concat(editProduct.colors)}
 
  setallproduct(UpdatedProduct)
 
  closeEditModal()
  toast('Product Has Been Edited',{
    duration: 4000,
    position: 'top-center',
    icon: '👋🏼',
    style:{
      zIndex:"111",
  backgroundColor:"black",
  color:"white"
    }
  
  })
  console.log(product)
}

}

const cancel = ()=>{
  setProduct(defaultProduct)
  closeModal()
}
const renderProductList = allproduct.map((product,idx)=>
<ProductCard product={product} key={product.id} 
  seteditProduct={seteditProduct}
  setisEditOpen={setisEditOpen}
  idx={idx}
  seteditProductidx={seteditProductidx}
  setOpenConfirmDelete={setOpenConfirmDelete}
  />)
const formList=FormInputList.map(input=>
<div className='flex flex-col' key={input.id}>
  <label className='text-md text-gray-700 mb-1' htmlFor={input.id}>{input.label}</label>
 <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/>
  {<ErrorMsg msg={errorMsg[input.name]} />}
</div>)
const editProductInput=(id:string,label:string,name:TproductName)=>{
 return(
  <div className='flex flex-col' key={id}>
  <label className='text-md text-gray-700 mb-1' htmlFor={id}>{label}</label>
 <Input type={"text"} id={id} name={name} value={editProduct[name]} onChange={onChangeEditHandler}/>
  {<ErrorMsg msg={""} />}
  </div>
 )

}
const removeProduct=()=>{
const removed = allproduct.filter(item=>item.id !== editProduct.id)
  setallproduct(removed)
  closeconfirmDeleteModal()
  toast('Product Has Been Deleted',{
    duration: 4000,
    position: 'top-center',
    icon: '👋🏼',
    style:{
      zIndex:"111",
  backgroundColor:"black",
  color:"white"
    }
  
  })
}
  return (
    <>
      <Home openModal={openModal}/>
      <main className='container mx-auto my-10 pt-15'>
    
    {/* <Button className=" bg-indigo-700 hover:bg-indigo-900 flex justify-center items-center mx-auto max-w-40" 
    onClick={openModal}>ADD</Button> */}
   <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
 {renderProductList}
  </div>
  {/* add model */}
  <Modal isOpen={isOpen} closeModal={closeModal} title='ADD NEW PRODUCT' >
 
  <form className='space-y-2 z-40' onSubmit={submitHandler}>
  {formList}
  <Select selected={selected} setSelected={setSelected}/>
  <div className="flex space-x-2 mt-3">
    {
      ColorCircle.map(color=><CircleColor key={color} bgColor={color} onClick={()=>
      {
        
        if(temp.includes(color)){
         setTemp(temp.filter((item)=>item !== color))
          return
        }
        setTemp(prev=>[...prev,color])
      }
      }/>)
    }
  </div>

  <div className="flex space-x-1 mt-3 flex-wrap">
    {
      temp.map(color=><span key={color} className='text-white p-1 mb-1 rounded-md'  style={{backgroundColor:color}}>{color}</span>)
    }
  </div>
  <div className='flex justify-between items-center space-x-2'>
  
  <Button className=" bg-indigo-700 hover:bg-indigo-900" width="w-full">Submit</Button>
  <Button className=" bg-red-700 hover:bg-red-900" width="w-full" onClick={cancel}>Cancel</Button>
  </div>
  </form>
 
  </Modal>
  {/* edit model */}
  <Modal isOpen={isEditOpen} closeModal={closeEditModal} title='edit PRODUCT'>
 
  <form className='space-y-2' onSubmit={submitEditHandler}>
 {editProductInput("title","Product title","title")}
 {editProductInput("description","Product description","description")}
 {editProductInput("image","ImageUrl","image")}
 {editProductInput("price","Product price","price")}
  
  <Select selected={editProduct.category} setSelected={(value)=>seteditProduct({...editProduct,category:value})}/>
  <div className="flex space-x-2 mt-3">
    {
      ColorCircle.map(color=><CircleColor key={color} bgColor={color} onClick={()=>
      {
        
        if(temp.includes(color)){
         setTemp(temp.filter((item)=>item !== color))
          return
        }
        if(editProduct.colors.includes(color)){
         setTemp(temp.filter((item)=>item !== color))
          return
        }
        setTemp(prev=>[...prev,color])
      }
      }/>)
    }
  </div>

  <div className="flex space-x-1 mt-3 flex-wrap">
    {
      temp.concat(editProduct.colors).map(color=><span key={color} className='text-white p-1 mb-1 rounded-md'  style={{backgroundColor:color}}>{color}</span>)
    }
  </div>
  <div className='flex justify-between items-center space-x-2'>
  
  <Button className=" bg-indigo-700 hover:bg-indigo-900" width="w-full">Submit</Button>
  <Button className=" bg-red-700 hover:bg-red-900" width="w-full" onClick={cancel}>Cancel</Button>
  </div>
  </form>
 
  </Modal>
  {/* remove cart */}
  <Modal isOpen={OpenConfirmDelete}
   closeModal={closeconfirmDeleteModal} 
   title='Are  You Sure You want remove this product'
    description="You are about to remove the following item from your list,This action cannot be undone. Please confirm if you would like to proceed with the removal."
   >
  
  <div className='flex justify-between items-center space-x-2'>
  
  <Button className=" bg-[#c2344d] hover:bg-red-800" width="w-full" onClick={removeProduct}>Yes, remove</Button>
  <Button className=" bg-gray-500 hover:bg-gray-600" width="w-full" onClick={closeconfirmDeleteModal}>Cancel</Button>
  </div>
 
  </Modal>
  <Toaster/>
 </main>
    </>
 
  )
}

export default App
