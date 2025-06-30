import SocialMedia from '../SocialMedia/SocialMedia'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            < SocialMedia />
            <p>© {new Date().getFullYear()} TuSitioVH. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer