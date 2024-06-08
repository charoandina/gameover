import cart from '../../assets/carritocompra.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalCount } = useContext(CartContext)

  let quantity = totalCount();
  return (
    <Link to="/cart" className='cartDiv'>
        <img src={cart} alt="Carrito de compra" />
        <p>{ quantity >= 1 && quantity}</p>
    </Link>
  )
}

export default CartWidget