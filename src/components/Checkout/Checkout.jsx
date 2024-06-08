import { useState } from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import db from '../../db/db.js'
import validateForm from '../../utils/validatonYup.js'
import { toast } from 'react-toastify'
import './Checkout.css'

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        name:"",
        phone: "",
        email:"",
        confirmEmail: ""
    })

    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deleteAllProducts } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const HandleSubmitForm = async(event) => {
        event.preventDefault()

        if (dataForm.email !== dataForm.confirmEmail) {
            toast.warning('Los emails no coinciden');
            return;
        }

        const order = {
            buyer: {...dataForm},
            products:  [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

        try {
            const response = await validateForm(dataForm)
            if (response.status === "Success"){
                generateOrder(order)
                toast.success(response.message)
            }else {
                toast.warning(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    };

    const generateOrder = (order) => {
        const orderRef = collection(db, "orders")
        addDoc(orderRef, order)
            .then((response)=> setIdOrder(response.id) )
            .finally(()=> {
                updateStock()

                deleteAllProducts()
            })
    };

    const updateStock = () => {
        cart.map((cartProduct) => {
            let count = cartProduct.count

            delete cartProduct.count

            const productRef = doc(db, "products", cartProduct.id)
            setDoc(productRef, { ...cartProduct, stock: cartProduct.stock - count})
            .then(()=> console.log("Stock actualizado"))
            .catch((error) => console.log(error))
        })
    }

  return (
    <div>
        {idOrder ? (  
                <div className='successorder-container contrail-one-regular'>
                    <h2 className='title-success'>Orden generada con exito!</h2>
                    <p className='info-success'>Guarde el ID de su orden:</p>
                    <p className='id-number'> {idOrder}</p>
                </div>
            ) : (
                <Form dataForm={dataForm} 
                handleChangeInput={handleChangeInput} 
                HandleSubmitForm={HandleSubmitForm}/>
            )}
    </div>
  );
};

export default Checkout