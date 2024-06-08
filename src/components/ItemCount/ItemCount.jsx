import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, addProduct }) => {
    const [quantity, setQuantity] = useState(1);

    const handleClickIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleClickDecrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleClickAddToCart = () => {
        addProduct(quantity)
    }


return(
    <div className='counter-container'>
        <div className='buttons-counter'>
            <button onClick={handleClickDecrement} className='button-counter'>-</button>
            <h4>{quantity}</h4>
            <button onClick={handleClickIncrement} className='button-counter'>+</button>
        </div>

        <div onClick={handleClickAddToCart} className='add-button'>
            Agregar al carrito
        </div>
    </div>
    );
};

export default ItemCount;