import Swal from 'sweetalert2';

 const PopupErrorConexion =()=>{

    
Swal.fire({
    title: 'Error de conexión',
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

export default PopupErrorConexion;