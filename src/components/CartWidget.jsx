import cart from '../assets/carritocompra.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cartDiv'>
        <img src={cart} alt="Carrito de compra" />
        <p>0</p>
    </div>
  )
}

export default CartWidget