import { FaReact, FaWordpress, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiNextdotjs, SiMui, SiJavascript, SiMysql } from 'react-icons/si'
import './TechRibbon.css'

const TechRibbon = () => {
    const techItems = [
        { icon: <FaReact />, name: 'React' },
        { icon: <SiMui />, name: 'Material UI' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <FaWordpress />, name: 'WordPress' },
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3Alt />, name: 'CSS3' },
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <SiMysql />, name: 'MySQL' },
    ]

    // Para que se repitan y haga loop infinito visual
    const repeated = [...techItems, ...techItems]

    return (
        <section className="tech-ribbon">
            <h3 className="tech-title">Tecnologías que usamos</h3>
            <div className="tech-track">
                {repeated.map((item, i) => (
                    <div className="tech-item" key={i}>
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechRibbon
