import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const [hideCount, setHideCount] = useState(false);
  const { addProductCart } = useContext(CartContext);

  const addProduct = (quantity) => {
    const productCart = { ...product, count: quantity }
    addProductCart(productCart);
    setHideCount(true);
  }


  return (
    <div className='card-details-container contrail-one-regular'>
      <div className='card-details'>
          <img src={product.image} className='img-product'/>
        <div className='item-details'>
          <p className='product-name'>{product.name}</p>
          <p>{product.descripcion}</p>
          <p>${product.price}</p>
          {hideCount ? (
          <Link className="button-cart" to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;