import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        const found = cart.find(item => item.id === pizza.id);
        if (found) {
            setCart(cart.map(item => item.id === pizza.id ? { ...item, count: item.count + 1 } : item));
        } else {
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

    const increaseQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item => item.id === id ? { ...item, count: item.count - 1 } : item);
        setCart(updatedCart.filter(item => item.count > 0));
    };

    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};
