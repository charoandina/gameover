import { object, string, mixed } from "yup";

let userSchema =  object({
    name: string().required("El nombre es requerido"),
    phone: string().required("El teléfono es requerido"),
    email: string().email().required("El email es requerido")
})


const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "Success", message: "Formulario enviado correctamente" }
    } catch (error) {
        return { status: "Error", message: error.message }
    }
}

export default validateForm