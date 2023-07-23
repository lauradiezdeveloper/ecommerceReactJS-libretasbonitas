import { useFormik } from "formik"
import * as Yup from "yup"
import CheckoutFormik from "./Checkout";



const CheckoutContainer = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            phoneNumer: "",
        },
        onSubmit: (data)=>{console.log(data);
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


    return <CheckoutFormik handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />;

    }

export default CheckoutContainer