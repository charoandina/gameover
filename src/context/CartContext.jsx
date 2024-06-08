import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    const addProductCart = (newProduct) => {
        const condition = duplicateProduct(newProduct.id)
        if(condition){
            const modifiedProducts = cart.map((cartProduct) => {
                if(cartProduct.id === newProduct.id){
                    return { ...cartProduct, count: cartProduct.count + newProduct.count }
                } else {
                    return cartProduct
                }
            })

            setCart(modifiedProducts)
        }else {
            setCart([...cart, newProduct])
        }
    } 

    const totalCount = () => {
        const totalAmount = cart.reduce( (total, product)=> total + product.count, 0 )
        return totalAmount;
    }

    const totalPrice = () => {
        const totalPurchase = cart.reduce( (total, cartProduct) => total + ( cartProduct.price * cartProduct.count ), 0 )
        return totalPurchase
    }

    const deleteAllProducts = () => {
        setCart([])
    }

    const duplicateProduct = (idProduct) => {
        const condition = cart.some( (productInCart)=> productInCart.id === idProduct )
        return condition
    }

    const deleteProductById = (idProduct) => {
        const filtredProducts = cart.filter( (cartProduct) => cartProduct.id !== idProduct )
        setCart(filtredProducts)
    }

    return(
        <CartContext.Provider value={ { cart, addProductCart, totalCount, deleteAllProducts, deleteProductById, totalPrice } }>
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }