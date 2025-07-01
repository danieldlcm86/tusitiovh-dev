import './PlanCards.css'
import PlanCard from './Card/PlanCard'

const PlanCards = () => {
    const plans = [
        {
            price: "",
            title: "Landing Básica",
            info: "Ideal para negocios que quieren una presencia digital rápida y profesional.",
            points: [
                "Sección principal “one-page”",
                "Diseño responsive",
                "Formulario de contacto",
                "Integración con WhatsApp"
            ],
            buttonInfo: "Cotiza ahora",
            referencia: "https://wa.me/5219932111311?text=Hola%20TuSitioVH%2C%20quiero%20más%20información%20sobre%20el%20paquete%20%22Landing%20Básica%22"
        },
        {
            price: "",
            title: "Sitio Informativo",
            info: "Pensado para negocios que necesitan mostrar más contenido y posicionarse mejor en Google.",
            points: [
                "Todo lo del Paquete 1",
                "3 a 5 páginas",
                "Optimizado para SEO",
                "Google Maps y redes sociales"
            ],
            buttonInfo: "Cotiza ahora",
            referencia: "https://wa.me/5219932111311?text=Hola%20TuSitioVH%2C%20quiero%20más%20información%20sobre%20el%20paquete%20%22Sitio%20Informativo%22"
        },
        {
            price: "",
            title: "Presencia Total",
            info: "Para comercios que desean un sitio personalizado con opción a mantenimiento continuo.",
            points: [
                "Todo lo del Paquete 2",
                "Dominio por 1 año",
                "Hosting (opcional)",
                "Capacitación al cliente"
            ],
            buttonInfo: "Cotiza ahora",
            referencia: "https://wa.me/5219932111311?text=Hola%20TuSitioVH%2C%20quiero%20más%20información%20sobre%20el%20paquete%20%22Presencia%20Total%22"
        }
    ]

    return (
        <section className="plan-cards-section">
            <h2 className='plan-cards-title' id='plans'>Conoce los planes que se ajustan a tu medida</h2>
            <div className="plan-cards">
                {plans.map((plan, index) => (
                    <PlanCard key={index} {...plan} />
                ))}
            </div>
            <p className="plan-note">
                * Todos nuestros servicios incluyen factura fiscal si la requieres.
            </p>
        </section>
    )
}

export default PlanCards
