
// Genero la constante que valida (Emi)

const validation = (values) => {
    let errors = {};
  
    if (!values.nombre) {
      errors.nombre = "Es necesario que ingreses tu nombre"
    }
  
    if (!values.apellido) {
      errors.apellido = "Es necesario que ingreses tu apellido"
    }
  
    if (!values.email) {
      errors.email = "Es necesario que ingreses tu mail"
    } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(values.email)) {
      errors.email = "El mail es inválido"
    }
  
    if (!values.pass) {
      errors.pass = "La contraseña es requerida"
    } else if (values.pass.length < 8) {
      errors.pass = "La contraseña es muy corta"
    }
  
    return errors
  }
  
  export default validation