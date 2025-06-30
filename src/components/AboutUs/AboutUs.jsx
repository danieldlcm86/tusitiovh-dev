import './AboutUs.css'
import { showAboutModal } from './Modal/AboutModal'

const AboutUs = () => {
    return (
        <>
            <section className='about-us' id='about-us'>
                <div className='about-container'>
                    <div className="about-overlay">
                        <h2 className='about-titulo'>Tu marca es Nuestra Inspiración</h2>
                        <a
                            className="about-btn"
                            onClick={(e) => {
                                e.preventDefault()
                                showAboutModal()
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Conócenos
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs