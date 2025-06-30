import './ContactUs.css'
import InputForm from './InputForm/InputForm'
import ImageContactUs from "../../assets/banners/contact-us.png"
import ButtonTransition from '../ButtonTransition/ButtonTransition'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const ContactUs = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                form.current, 
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                alert("¡Mensaje enviado con éxito!")
                form.current.reset();
            })
            .catch((error) => {
                console.error("Error al enviar", error);
                alert("Ocurrió un error. Intenta nuevamente")
            })
    }

    return (
        <>
            <section className="contact-section" id="contacto">
                <div className="contact-container">
                    <div className="contact-text-form">
                        <h2>
                            ¿Tienes <span>preguntas?</span><br />
                            Escríbenos.
                        </h2>
                        <p>Te responderemos lo antes posible.</p>

                        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                            <div>
                                {/* type, require, para, name */}
                                < InputForm
                                    type="text"
                                    require={true}
                                    para="name"
                                    name="name"
                                    label="Nombre"
                                />

                                <div className="form-row">
                                    < InputForm
                                        type="email"
                                        require={true}
                                        para="email"
                                        name="email"
                                        label="Correo Electrónico"
                                    />
                                    < InputForm
                                        type="tel"
                                        require={false}
                                        para="Teléfono"
                                        name="Teléfono"
                                        label="Teléfono"
                                    />
                                </div>
                            </div>
                            <textarea className='text-area' placeholder="Déjanos tu mensaje" name='message' rows="4" required></textarea>
                            <ButtonTransition className="btn-contactus">
                                Enviar <i className="fa-solid fa-paper-plane"></i>
                            </ButtonTransition>
                        </form>
                    </div>

                    <div className="contact-image">
                        <img src={ImageContactUs} alt="Persona hablando" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs