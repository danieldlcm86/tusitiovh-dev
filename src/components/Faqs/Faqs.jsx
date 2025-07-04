import { FaChevronDown } from 'react-icons/fa'
import './Faqs.css'

const faqs = [
    {
        question: '¿Qué incluye el desarrollo de mi sitio web?',
        answer:
            'Incluye diseño personalizado, desarrollo adaptado a tu negocio, integración con WhatsApp, redes sociales, Google Maps, formulario de contacto y optimización para móviles.'
    },
    {
        question: '¿Puedo tener solo una landing page sin secciones adicionales?',
        answer:
            'Sí. Puedes elegir una landing page sencilla con toda la información clave de tu negocio en una sola vista. Es ideal para promociones, productos únicos o servicios específicos.'
    },
    {
        question: '¿Necesito saber de programación para administrar mi sitio?',
        answer:
            'No. Si eliges una solución administrable como WordPress, te damos acceso con una guía básica. También ofrecemos planes de mantenimiento si prefieres que nosotros lo actualicemos por ti.'
    },
    {
        question: '¿Pueden ayudarme con el dominio y hosting?',
        answer:
            'Claro. Podemos gestionarlo por ti o guiarte para que lo adquieras directamente. Trabajamos con proveedores como Hostinger y Vercel para ofrecer opciones confiables y económicas.'
    },
    {
        question: '¿Qué formas de pago aceptan?',
        answer:
            'Aceptamos transferencias bancarias, PayPal o depósitos en OXXO. Puedes pagar en una sola exhibición o dividir el pago en dos partes: 50% al iniciar y 50% al entregar.'
    },
    {
        question: '¿Cuánto tiempo tarda el desarrollo de mi sitio?',
        answer:
            'Un sitio básico se entrega en 5 a 10 días hábiles. Sitios multipágina o con funciones adicionales pueden tardar hasta 15 días. Siempre te mantenemos informado del avance.'
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
