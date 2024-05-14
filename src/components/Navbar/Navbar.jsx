import './Navbar.css'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='contrail-one-regular navbar'>
      <Link to="/" className='logo-container'>
        <img src={logo} alt="Logo Game Over"  className='logo'/>
      </Link>
        <ul className='categories'>
            <Link to="/category/consolas" className='category-link'>CONSOLAS</Link>
            <Link to="/category/accesorios" className='category-link'>ACCESORIOS</Link>
            <Link to="/category/juegos" className='category-link'>JUEGOS</Link>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar