import Swal from 'sweetalert2';

 const PopupEmailRepetido =()=>{

    
Swal.fire({
    title: 'Existe otra cuenta con el mismo email',
    icon:'error',
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

export default PopupEmailRepetido;