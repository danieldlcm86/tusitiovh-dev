import './ContactUs.css'
import InputForm from './InputForm/InputForm'
import ImageContactUs from "../../assets/banners/contact-us.png"
import ButtonTransition from '../ButtonTransition/ButtonTransition'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { ErrorModal } from './Modals/ErrorModal'
import { SendModal } from './Modals/SendModal'


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
                SendModal();
                form.current.reset();
            })
            .catch((error) => {
                console.error("Error al enviar", error);
                ErrorModal();
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
                        <p>Te responderemos lo antes posible,</p>
                        <p className="whatsapp-cta">o mándanos WhatsApp <i className="fa-brands fa-whatsapp"></i>
                            <a href="https://wa.me/5219932111311?text=Hola%20TuSitioVH%2C%20quiero%20más%20información" target="_blank" rel="noopener noreferrer">
                                <strong>+52 993 211 1311</strong>
                            </a>
                        </p>

                        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <span className='obligatorio'><span className='asterisco'>*</span>Campo obligatorio</span>
                                {/* type, require, para, name */}
                                < InputForm
                                    type="text"
                                    required={true}
                                    para="name"
                                    name="name"
                                    label="Nombre"
                                    asterisco="*"
                                />

                                <div className="form-row">
                                    < InputForm
                                        type="email"
                                        required={true}
                                        para="email"
                                        name="email"
                                        label="Correo Electrónico"
                                        asterisco="*"
                                    />
                                    < InputForm
                                        type="tel"
                                        required={false}
                                        para="phone"
                                        name="phone"
                                        label="Teléfono"
                                        asterisco=""
                                    />
                                </div>
                            </div>
                            <textarea className='text-area' placeholder="Déjanos tu mensaje*" name='message' rows="4" required />
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