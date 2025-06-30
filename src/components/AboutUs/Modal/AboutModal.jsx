import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './AboutModal.css'

const MySwal = withReactContent(Swal)

export const showAboutModal = () => {
    MySwal.fire({
        title: '¿Quiénes somos?',
        html: `
            <p style="text-align: left; font-size: 16px; line-height: 1.6;">
                TuSitioVH nació con el objetivo de apoyar a negocios locales de Tabasco a tener presencia digital profesional. 
                Con un enfoque moderno, cercano y accesible, desarrollamos sitios web que ayudan a emprendedores y comerciantes a conectar con sus clientes.
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
