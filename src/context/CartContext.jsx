import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({})


export const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([])

    const [totalItens, setTotalItens] = useState(0)

    const addItem = (item) => {
        const productsExistsInCart = cart.find(product => product.id === item.id)

        if (productsExistsInCart) {
            setCart(cart.map((product) => {
                if (item.id === product.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product
            }))
        } else {
            setCart([...cart, {...item, quantity: 1}])
        }
    }

    const removeItem = (id) => {
        const productsExistsInCart = cart.find(product => product.id === id)

        if (productsExistsInCart.quantity === 1) {
            setCart(cart.filter(product => product.id !== id))
        } else {
            setCart(cart.map((product) => {
                if (id === product.id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product
            }))
        }
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    useEffect(() => {
        const totalItens = cart.reduce((acc, product) => acc + product.quantity, 0)
        setTotalItens(totalItens)
    },[cart])

    return (
        <CartContext.Provider value={{addItem, removeItem, removeProduct, cart, totalItens}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider