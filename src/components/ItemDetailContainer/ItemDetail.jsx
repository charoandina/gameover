import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  return (
    <div className='card-details-container contrail-one-regular'>
        <img src={product.image} className='img-product'/>
      <div className='item-details'>
        <p className='product-name'>{product.name}</p>
        <p>{product.descripcion}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
export default ItemDetail;