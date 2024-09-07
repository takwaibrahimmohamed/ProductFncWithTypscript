export const Validation=(Product:{ title: string;description: string;image: string;price: string})=>{
    const errors:{ title: string;description: string;image: string;price: string}={
        title: "",
        description: "",
        image: "",
        price: "",
    
    }

    const imageUrlRegex = /^(ftp|http|https):\/\/[^\s/$.?#].[^\s]*$/.test(Product.image);
    
    if(!Product.title.trim() || Product.title.length<10 || Product.title.length>80){
        errors.title="Product Title must be between 10 and 80 char"
    }
    if(!Product.description.trim() || Product.description.length<10 || Product.description.length>900){
        errors.description="Product description must be between 10 and 900 char"
    }
    if(!imageUrlRegex || !Product.image.trim()){
        errors.image = "image Not valid"
    }
    if(isNaN(Number(Product.price)) || !Product.price.trim()){
        errors.price = "Pls enter Valid Price"
    }
   
        return errors
    }
 