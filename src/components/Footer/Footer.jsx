import SocialMedia from '../SocialMedia/SocialMedia'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            < SocialMedia 
                whatsapp="https://wa.me/5219932111311?text=Hola%20TuSitioVH%2C%20quiero%20más%20información%20sobre%20los%20paquetes"
                facebook="https://www.facebook.com/people/Tusitiovh/61577745212962/"
                instagram="https://www.instagram.com/tusitiovh/"
                linkedin="https://www.linkedin.com/company/tusitiovh"
            />
            <p>© {new Date().getFullYear()} TuSitioVH. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer