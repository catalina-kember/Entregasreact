import { createContext, useState } from "react"

export const CardContext = createContext([])


export const CardProvider = ({children}) =>{ 
    
    const [objects, setObjects] = useState([])
    
    const addItem =(product, quantity)=> {
        const exsist = objects.some(object => object.id == product.id)
        
        if (!exsist) setObjects(prev => [...prev , {...product , quantity} ])
        
        else{
            const actualizar = objects.map(object=>{
                
                if (object.id==product.id)
                    return{
                        ...object,
                        quantity: object.quantity + quantity,
                    }
                
                    else return object
            })
            
            setObjects(actualizar)
        }
    }
    const totalWidget=  objects.reduce((acc, val) => acc+val.quantity, 0)
    console.log(totalWidget)

    const removeItem =(id) => {
        const productFiltered = objects.filter(object => object.id != id)
        setObjects(productFiltered)
    }

    const clear =()=> setObjects([])

    return (
        <CardContext.Provider  value= {{addItem, removeItem, clear, totalWidget}}>{children}</CardContext.Provider>
    )
}