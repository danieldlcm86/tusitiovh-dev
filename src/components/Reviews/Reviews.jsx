import ReviewCard from './ReviewCard/ReviewCard'
import './Reviews.css'

const getDaysAgo = (offsetDays) => {
    const today = new Date()
    const pastDate = new Date(today)
    pastDate.setDate(today.getDate() - offsetDays)

    const differenceInMs = today - pastDate
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24))

    return differenceInDays
}

const cardsReview = [
    {
        days: getDaysAgo(2),
        description: "Quedamos fascinados con el diseño de nuestra página. Captaron exactamente lo que queríamos y superaron nuestras expectativas.",
        name: "Alejandro Silván"
    },
    {
        days: getDaysAgo(15),
        description: "La comunicación fue clara desde el inicio. Todo el proceso fue rápido, profesional y el resultado final se ve increíble.",
        name: "Victor Mosqueda"
    },
    {
        days: getDaysAgo(19),
        description: "Mi sitio se adapta perfecto a móviles, luce moderno y es fácil de usar. ¡Gracias por ayudarnos a destacar en línea!",
        name: "El equipo de Agromerca2"
    },
    {
        days: getDaysAgo(7),
        description: "Nos ayudaron incluso con el dominio y el hosting. Ahora nuestros clientes nos encuentran más fácilmente en Google.",
        name: "Fabián Montejo"
    },
]

const Reviews = () => {
    return (
        <section className='reviews'>
            <h2 className='reviews-titulo'>Nuestros clientes hablan por Nosotros.</h2>
            <div className="reviews-section">
                < ReviewCard cards={cardsReview} />
            </div>
        </section>
    )
}

export default Reviews