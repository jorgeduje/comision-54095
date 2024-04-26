import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
      confirmarContraseña: "",
    },
    onSubmit: (x) => {
      console.log(x);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("el campo es obligatorio")
        .min(3, "bla bla"),
      email: Yup.string()
        .email("El email no es valido")
        .required("el campo es obligatorio"),
      contraseña: Yup.string()
        .required("el campo es obligatorio")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "se necesita tal cosa adsa"
        ),
      confirmarContraseña: Yup.string()
        .required("el campo es obligatorio")
        .oneOf([Yup.ref("contraseña")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

 
  return (
    <div style={{ padding: "100px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          type="text"
          label="Nombre"
          onChange={handleChange}
          name="nombre"
          error={errors.nombre ? true : false} // undefined / "el campo es obligatoriio"
          helperText={errors.nombre}
        />
        {/* <input type="text" className={ condicion ? "inputError" : "input"} />
        <span>{}</span> */}

        <TextField
          variant="outlined"
          type="text"
          label="Email"
          onChange={handleChange}
          name="email"
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          variant="outlined"
          type="text"
          label="Contraseña"
          onChange={handleChange}
          name="contraseña"
          error={errors.contraseña ? true : false}
          helperText={errors.contraseña}
        />
        <TextField
          variant="outlined"
          type="text"
          label="Confirmar"
          onChange={handleChange}
          name="confirmarContraseña"
          error={errors.confirmarContraseña ? true : false}
          helperText={errors.confirmarContraseña}
        />
        <Button variant="contained" type="submit">
          enviar
        </Button>
      </form>
    </div>
  );
};
