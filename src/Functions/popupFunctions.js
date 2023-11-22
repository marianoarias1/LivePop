import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'



export function validateFields(){
    Swal.fire({
        title: "OOPS",
        text: `Por favor, rellene todos los campos`,
        icon: "warning",
        confirmButtonText: `OK`
      })
}

export function outOfStock(){
    Toastify({
        text: "No hay suficiente stock",
        duration: 1500,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right", 
        stopOnFocus: false,
        style: {
          background: "rgb(187, 208, 227)",
        }
      }).showToast();
}
