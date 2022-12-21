import Swal from 'sweetalert2';

 const Popup =()=>{

    
Swal.fire({
    title: 'Su usuario ha sido creado correctamente',
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
    timer: 2000
  })

}

export default Popup