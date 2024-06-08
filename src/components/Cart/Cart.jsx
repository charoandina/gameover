import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'
import { FaTrash } from "react-icons/fa";

const Cart = () => {

    const { cart, deleteAllProducts, deleteProductById, totalPrice } = useContext(CartContext)

    if(cart.length === 0){
        return(
            <div className="empty-card-container contrail-one-regular">
                <h2>Tu carrito de compra esta vacío</h2>
                <Link to="/" className="finish-button">Ver productos</Link>
            </div>
        )
    }

  return (
    <div className="cart-container contrail-one-regular">
        <h1 className="title">Carrito de compras</h1>
        <div className="productos-carrito">
            {
                cart.map( (cartProduct) => (
                    <div key={cartProduct.id} className="card">
                        <img src={cartProduct.image} alt="" className="cardcart-img"/>
                        <div className="product-info">
                            <h2>{cartProduct.name}</h2>
                            <h3>Cantidad: {cartProduct.count}</h3>
                            <h3>${cartProduct.price} </h3>
                            <h3>Precio parcial: ${ cartProduct.price * cartProduct.count }</h3>
                            <FaTrash className="trash-icon" onClick={() => deleteProductById(cartProduct.id)} color="#00F6FF" size={15} />
                        </div>
                    </div>
                ))
            }
        </div>
        <h2 className="total">Total: ${totalPrice()} </h2>
        <div className="last-buttons-container">
            <Link to="/checkout" className="finish-button">Terminar compra</Link>
            <button onClick={deleteAllProducts} className="finish-button contrail-one-regular">Vaciar carrito</button>
        </div>
    </div>
  )
}

export default Cart