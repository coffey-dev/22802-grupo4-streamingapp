import Swal from 'sweetalert2';


 const PopupEmailNuevo =()=>{

    
Swal.fire({
    title: 'El correo ingresado no esta asociado a ninguna cuenta',
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

export default PopupEmailNuevo;