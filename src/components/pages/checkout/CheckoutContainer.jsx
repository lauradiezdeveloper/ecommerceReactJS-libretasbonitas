import { useFormik } from "formik"
import * as Yup from "yup"
import CheckoutFormik from "./Checkout";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore"



const CheckoutContainer = () => {

    const { cart, getTotalPrice } = useContext(CartContext);
    const [ orderId , setOrderId ] = useState("");

    let total = getTotalPrice();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            phoneNumber: "",
        },
        onSubmit: (data)=>{
            let order = {
                buyer: data,
                items: cart,
                totalPrice: total,
                date: serverTimestamp()
        };
    
        //Crear orden de compra en Firebase
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then( res => setOrderId(res.id));

        // Modificar el stock en Firebase cuando se hace una compra
        cart.forEach((product)=>{
            updateDoc(doc(db, "products", product.id) , {
                stock: product.stock - product.quantity,
            });
        });
        },
        
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Este campo es obligatorio"),
            email: Yup.string()
                .email("No es un formato de email válido")
                .required("Este campo es obligatorio"),
            address: Yup.string()
                .required("Este campo es obligatorio"),
            phoneNumber: Yup.string()
                .matches(phoneRegExp, 'Algo parece incorrecto en el número de teléfono')
                .max(12, "Número de teléfono demasiado largo")
                .required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });


    return <div>
        <CheckoutFormik  handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        orderId={orderId}/>
        </div>

    }

export default CheckoutContainer