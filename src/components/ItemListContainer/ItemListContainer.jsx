import './ItemListContainer.css'
import ItemList from './ItemList'
import  {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db.js';
import Loading from '../Loading/Loading.jsx';

const ItemListContainer = ({}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { idCategory } = useParams()

  const getProducts = () => {
    setLoading(true)
    const productsRef = collection(db, "products")
    getDocs(productsRef)
    .then((productsDb)=> {
      const data = productsDb.docs.map( (product) => {
        return { id: product.id, ...product.data() }
      })
      setProducts(data)
    }) 
    .finally(()=> setLoading(false))
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", idCategory))
    getDocs(q)
    .then((productsDb)=> {
      const data = productsDb.docs.map( (product) => {
        return { id: product.id, ...product.data() }
      })
      setProducts(data)
    })
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    } else {
      getProducts()
    }
  }, [idCategory]);


  return (
    <div className='itemListContainer contrail-one-regular'>
      <h2 className='title'>{ idCategory ? `${idCategory}` : "Bienvenido a Game Over" }</h2>
      {loading ? <Loading /> : <ItemList products={products} />}

    </div>
  )
}

export default ItemListContainer