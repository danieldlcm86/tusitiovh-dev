import './ContactUs.css'
import InputForm from './InputForm/InputForm'
import ImageContactUs from "../../assets/banners/contact-us.png"
import ButtonTransition from '../ButtonTransition/ButtonTransition'

const ContactUs = () => {
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

                        <form className="contact-form">
                            <div>
                                {/* type, require, para, name */}
                                < InputForm
                                    type="text"
                                    require={true}
                                    para="nombre"
                                    name="Nombre"
                                />

                                <div className="form-row">
                                    < InputForm
                                        type="email"
                                        require={true}
                                        para="Correo electrónico"
                                        name="Correo electrónico"
                                    />
                                    < InputForm
                                        type="tel"
                                        require={true}
                                        para="Teléfono"
                                        name="Teléfono"
                                    />
                                </div>
                            </div>
                            <textarea className='text-area' placeholder="Déjanos tu mensaje" rows="6" required></textarea>
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