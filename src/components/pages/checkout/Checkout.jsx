import { TextField } from "@mui/material"
import "./Checkout.css"

const Checkout = ({ handleSubmit, handleChange, errors, orderId  }) => {
    return (
        <div className="checkout-container">
        <h1>Checkout</h1>
        <div> {orderId ? (
        <div>
            <h3>Gracias por su compra</h3>
            <h4>Su id de compra es: {orderId}</h4>
        </div>
        ) : (
        <form onSubmit={(handleSubmit)} className="checkout-form">
            <TextField 
                type="text" 
                label="Nombre" 
                name="name" 
                className="checkout-input"
                variant="outlined" 
                error={errors.name ? true : false} 
                helperText={errors.name} 
                onChange={handleChange} />
            <TextField 
                type="text" 
                label="Email" 
                name="email" 
                className="checkout-input"
                variant="outlined" 
                error={errors.email ? true : false} 
                helperText={errors.email} 
                onChange={handleChange} />
            <TextField 
                type="address" 
                label="Dirección" 
                name="address" 
                className="checkout-input"
                variant="outlined" 
                error={errors.address ? true : false} 
                helperText={errors.address} 
                onChange={handleChange} />
            <TextField 
                type="phoneNumber" 
                label="Número de teléfono" 
                name="phoneNumber" 
                className="checkout-input"
                variant="outlined" 
                error={errors.phoneNumber ? true : false} 
                helperText={errors.phoneNumber} 
                onChange={handleChange} />
            <button type="submit">Seleccionar método de pago</button>
        </form>
    )}
    </div>
    </div>
  );
};

export default Checkout