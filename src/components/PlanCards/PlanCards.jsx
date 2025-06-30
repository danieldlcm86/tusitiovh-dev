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
            buttonInfo: "Cotiza ahora"
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
            buttonInfo: "Cotiza ahora"
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
            buttonInfo: "Cotiza ahora"
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
        </section>
    )
}

export default PlanCards
