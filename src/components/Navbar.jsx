import './Navbar.css'
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div className='contrail-one-regular navbar'>
        <img src={logo} alt="Logo Game Over" />
        <ul>
            <li><a href="#">CONSOLAS</a></li>
            <li><a href="#">ACCESORIOS</a></li>
            <li><a href="#">JUEGOS</a></li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar