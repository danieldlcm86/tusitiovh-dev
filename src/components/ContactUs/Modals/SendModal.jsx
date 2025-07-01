import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const SendModal = () => {
    MySwal.fire({
        icon: "success",
        title: '¡Mensaje enviado con éxito!',
        confirmButtonText: 'Regresar',
        confirmButtonColor: '#8E7DCC',
        background: '#ffffff',
        customClass: {
            popup: 'about-modal',
        },
        draggable: true
    })
}
