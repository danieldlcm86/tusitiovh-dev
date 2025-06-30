import './Services.css';
import IconLanding from '/icons/landing.png';
import IconInfo from '/icons/informativo.png';
import IconHosting from '/icons/hosting.png';
import IconMobile from '/icons/mobile.png';
import IconWhatsApp from '/icons/whatsapp.png';
import ButtonTransition from '../ButtonTransition/ButtonTransition'
import '@fortawesome/fontawesome-free/css/all.min.css';

const servicios = [
    {
        icon: IconLanding,
        titulo: 'Landing Personalizada',
        descripcion: 'de una sola página efectiva para que tu negocio impacte al primer clic.'
    },
    {
        icon: IconInfo,
        titulo: 'Sitios informativos',
        descripcion: 'donde tu negocio crecerá con múltiples secciones adaptadas a tus necesidades.'
    },
    {
        icon: IconHosting,
        titulo: 'Dominio + Hosting',
        descripcion: 'para configurar todo lo necesario y ganar presencia digital.'
    },
    {
        icon: IconMobile,
        titulo: 'Optimización móvil',
        descripcion: 'para celulares y tabletas sin perder calidad.'
    },
    {
        icon: IconWhatsApp,
        titulo: 'Integración con WhatsApp',
        descripcion: 'que incluye contacto directo, mapas y formulario de contacto.'
    }
];

const Servicios = () => {
    return (
        <section className="servicios">
            <h2 className="servicios-titulo">Tu socio de diseño para aplicaciones, sitios web, marcas y productos.</h2>
            <div className="servicios-lista">
                {servicios.map((item, index) => (
                    <div className="servicio" key={index}>
                        <img src={item.icon} alt={item.titulo} className="servicio-icono" />
                        <p className="servicio-descripcion"><span className={`servicio-titulo titulo-${index}`}>{item.titulo}</span><span> </span>{item.descripcion}</p>
                    </div>
                ))}
            </div>
            <ButtonTransition onClick={() => {
                const section = document.getElementById('projects');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }} className="btn-services">
                Nuestros Proyectos <i className="fa-solid fa-arrow-right"></i>
            </ButtonTransition>
        </section>
    );
};

export default Servicios;
