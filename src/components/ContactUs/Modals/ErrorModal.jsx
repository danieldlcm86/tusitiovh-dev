import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const ErrorModal = () => {
    MySwal.fire({
        icon: "error",
        title: '¡Ups!',
        html: `
            <p style="text-align: center; font-size: 18px; line-height: 1.6;">
                Ocurrió un error. Inténtalo nuevamente
            </p>
    `,
        confirmButtonText: 'Regresar',
        confirmButtonColor: '#8E7DCC',
        background: '#ffffff',
        customClass: {
            popup: 'about-modal',
        }
    })
}
