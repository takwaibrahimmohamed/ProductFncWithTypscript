import { v4 as uuid } from 'uuid'
import { ICategory, IFormInputList, IProduct } from "../Interfaces"
export const ProductList: IProduct[] = [
    {
        id: uuid(),
        title: "2202 Genise G46",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "5000",
        colors: [  "#808080",
            "#000000",
            "#FFFFFF",],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    },
    {
        id: uuid(),
        title: "Mazda MX-5",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
        price: "5000",
        colors: [ "#FFC0CB",
            "#A52A2A",
            "#808080",],
        category: {
            name: "jeep",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",

        }
    }, {
        id: uuid(),
        title: "Volkswagen Phaeton",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
        price: "5000",
        colors: [ "#00FFFF",
            "#FF00FF",
            "#FFA500",
            "#800080",],
        category: {
            name: "Electronics",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",

        }
    }, {
        id: uuid(),
        title: "Porsche Cayenne",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
        price: "5000",
        colors: ["#FF00FF",
    "#FFA500",
    "#800080",],
        category: {
            name: "sedan",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",

        }
    }, {
        id: uuid(),
        title: "Vauxhall Chevette",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint venial doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
        price: "5000",
        colors: [ "#FFFF00",
            "#00FFFF",
            "#FF00FF",],
        category: {
            name: "sedan",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",

        }
    }, {
        id: uuid(),
        title: "Volvo V60",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint venial doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Volvo_V60_D5_Summum_%28Facelift%29_%E2%80%93_Frontansicht%2C_12._August_2013%2C_D%C3%BCsseldorf.jpg/400px-Volvo_V60_D5_Summum_%28Facelift%29_%E2%80%93_Frontansicht%2C_12._August_2013%2C_D%C3%BCsseldorf.jpg",
        price: "3000",
        colors: ["#FFFF00",
    "#00FFFF",
    "#FF00FF",],
        category: {
            name: "jeep",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Volvo_V60_D5_Summum_%28Facelift%29_%E2%80%93_Frontansicht%2C_12._August_2013%2C_D%C3%BCsseldorf.jpg/400px-Volvo_V60_D5_Summum_%28Facelift%29_%E2%80%93_Frontansicht%2C_12._August_2013%2C_D%C3%BCsseldorf.jpg",

        }
    }, {
        id: uuid(),
        title: "Pontiac Sunfire",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
        price: "50000",
        colors: ["#0000FF",
    "#FFFF00",
    "#00FFFF",],
        category: {
            name: "cars",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",

        }
    }, {
        id: uuid(),
        title: "2202 Genise G46",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "50000",
        colors: [ "#FF0000",
            "#0000FF",
            "#FFFF00",],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    },

]

export const FormInputList: IFormInputList[] = [
    {
        id: "title",
        name: "title",
        label: "Product title",
        type: "text",

    },
    {
        id: "description",
        name: "description",
        label: "Product description",
        type: "text",

    },
    {
        id: "image",
        name: "image",
        label: "ImageUrl",
        type: "text",

    },
    {
        id: "price",
        name: "price",
        label: "Product price",
        type: "text",

    }
]
export const ColorCircle:string[] = [
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#FFA500",
    "#800080",
    "#00FF00",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#000000",
    "#FFFFFF",
]
export const category: ICategory[] = [
    {
        id: uuid(),
        name: "Electronics",
        image: "https://media.istockphoto.com/id/532174758/photo/blue-circuit-with-binary-numbers.webp?b=1&s=612x612&w=0&k=20&c=Pk-fMgiTILfVhiVfK8LYiTNYV2Pw6nsJoB-IvttbQbQ=",
    },
    {
        id: uuid(),
        name: "jeep",
        image: "https://media.istockphoto.com/id/499723864/photo/scarf-mannequin.jpg?s=612x612&w=0&k=20&c=A4BolAsRBjQksPlI69YbVl3t7IKWx4k6velSJlpIRwg=",
    },
    {
        id: uuid(),
        name: "Cars",
        image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: uuid(),
        name: "sedan",
        image: "https://media.istockphoto.com/id/1555862031/photo/full-length-image-of-young-sportsman-basketball-player-in-motion-jumping-with-ball-against.jpg?s=612x612&w=0&k=20&c=_xnvDKKsSlo3oHFfk5l9z07mfNPOh3K8LAw8ziNIhVI=",
    },
]