import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    return (
      <div className='card-container contrail-one-regular'>
        <img src={product.image} className='card-img'/>
        <h3 className='card-title'>{product.name}</h3>
        <p>${product.price}</p>
        <Link to={`/detail/${product.id}`} className="button-item"> Ver detalles </Link>
      </div>
    );
  };

export default Item;