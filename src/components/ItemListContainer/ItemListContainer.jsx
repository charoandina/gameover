import './ItemListContainer.css'
import ItemList from './ItemList'
import getProducts from '../../data/data'
import  {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {

  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
    .then((respuesta) => {
      if(idCategory){
        const productsFilter = respuesta.filter( (productRes)=> productRes.category === idCategory )
          setProducts(productsFilter)
      }else{
        setProducts(respuesta);
      }
    })
    .catch ((error) => {
      console.log(error);
    })
    .finally (() => {
      console.log("Productos cargados");
    })
  }, [idCategory]);


  return (
    <div className='itemListContainer'>
    <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer