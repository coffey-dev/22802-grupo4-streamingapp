import Swal from 'sweetalert2';

 const PopupLoginExitoso =()=>{

    
Swal.fire({
    title: 'Bienvenido',
    icon:'success',
    color:'white',
    background:'black',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    showConfirmButton: false,
    timer: 3000
  })

}

export default PopupLoginExitoso;