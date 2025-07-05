import './styles/embla.css'
import EmblaCarousel from './EmblaCarousel'
import MontDesign from '../../assets/banners/mont-design.png'
import SiConsultores from '../../assets/banners/si-consultores.png'
import Agromerca2 from '../../assets/banners/agromerca2.png'
import CoffeeKode from '../../assets/banners/coffee-kode.png'

const OPTIONS = { loop: true }
const slides = [
    {
        nombre: "S.I. Consultores",
        descripcion: "Landing page moderna.",
        imagen: SiConsultores,
        link: "https://consultoria-si.vercel.app/"
    },
    {
        nombre: "MontDesign",
        descripcion: "Landing Page para Carpintería de Lujo",
        imagen: MontDesign,
        link: "https://mont-design.vercel.app/"
    },
    // {
    //     nombre: "Agromerca2",
    //     descripcion: "Landing page moderna.",
    //     imagen: Agromerca2,
    //     link: "https://proyecto2-demo.com"
    // },
    {
        nombre: "Coffee Kode",
        descripcion: "Landing page moderna.",
        imagen: CoffeeKode,
        link: "https://proyecto2-demo.com"
    },
]


const CarouselProjects = () => {
    return (
        <>
            < EmblaCarousel slides={slides} options={OPTIONS} />
        </>
    )
}

export default CarouselProjects