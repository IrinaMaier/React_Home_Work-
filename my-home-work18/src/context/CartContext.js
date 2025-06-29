import { createContext, useState, useEffect , useCallback} from "react";
import axios from "axios";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCartItems = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://682d82ec4fae188947564789.mockapi.io/cart');
            setCartItems(response.data);
        } catch (err) {
            setError(err.message);
            console.error("Ошибка при загрузке корзины:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const addToCart = async (product) => {
        try {
            const response = await axios.post(
                'https://682d82ec4fae188947564789.mockapi.io/cart',
                product
            );
            setCartItems(prev => [...prev, response.data]);
        } catch (err) {
            console.error("Ошибка при добавлении товара:", err);
            throw err;
        }
    };

    const deleteFromCart = async (productId) => {
        try {
            await axios.delete(
                `https://682d82ec4fae188947564789.mockapi.io/cart/${productId}` // Исправлена опечатка (добавлен / перед ${productId})
            );
            setCartItems(prev => prev.filter(item => item.id !== productId));
        } catch (err) {
            console.error("Ошибка при удалении товара:", err);
            throw err;
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    return (
        <CartContext.Provider 
            value={{
                cartItems,
                addToCart,
                deleteFromCart,
                fetchCartItems,
                isLoading,
                error
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;