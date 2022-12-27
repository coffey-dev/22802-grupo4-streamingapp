import Swal from 'sweetalert2';


 const PopupPasswordIncorrecto =()=>{

    
Swal.fire({
    title: 'Contraseña incorrecta',
    icon:'error',
    color:'white',
    background:'black',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    showConfirmButton: true,
    customClass:{
      confirmButton:'swalBtnConfirm'
    }
  })

}

export default PopupPasswordIncorrecto;