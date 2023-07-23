import { useFormik } from "formik"
import * as Yup from "yup"
import Login from "./Login";



const LoginContainer = () => {

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        onSubmit: (data)=>{console.log(data);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Este campo es obligatorio"),
            email: Yup.string()
                .email("No es un formato de email válido")
                .required("Este campo es obligatorio"),
            password: Yup.string()
                .required("Este campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
                    message: "La contraseña debe tener entre 6 y 15 caracteres, un número, un símbolo, una minúscula y una mayúscula.",
                }),
            repeatPassword: Yup.string()
                .required()
                .oneOf([Yup.ref("password")], "La contraseña no coincide")
        }),
        validateOnChange: false,
    });


    return <Login handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />;

    }

export default LoginContainer