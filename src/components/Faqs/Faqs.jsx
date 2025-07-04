import { FaChevronDown } from 'react-icons/fa'
import './FAQs.css'

const faqs = [
    {
        question: '¿Cuánto tarda en entregarse un sitio?',
        answer: 'El tiempo promedio de entrega es de 5 a 10 días hábiles, dependiendo de la complejidad del sitio.'
    },
    {
        question: '¿Incluyen hosting y dominio?',
        answer: 'Sí. Puedes contratarlos como servicio adicional o gestionarlos por tu cuenta. Nosotros te asesoramos en ambos casos.'
    },
    {
        question: '¿Puedo editar mi sitio después?',
        answer: 'Sí. Podemos entregarte una guía de administración o incluir un plan de mantenimiento mensual.'
    },
    {
        question: '¿Qué tecnologías usan?',
        answer: 'Trabajamos con React, WordPress, Next.js, Material UI, entre otras. Nos adaptamos a tu proyecto.'
    },
]

const FAQs = () => {
    return (
        <section className="faqs">
            <h2 className="faqs-title">Respondemos tus Preguntas frecuentes</h2>
            <div className="faqs-list">
                {faqs.map((faq, index) => (
                    <details key={index} className="faq-item">
                        <summary>
                            {faq.question}
                            <FaChevronDown className="chevron-icon" />
                        </summary>
                        <p>{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    )
}

export default FAQs
