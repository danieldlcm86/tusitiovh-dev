import './Projects.css'
import CarouselProjects from '../Carousel/CarouselProjects'

const Projects = () => {
    return(
        <>
        <section className='projects'>
            <div className='projects-container'> 
                <h2 className='projects-titulo' id='projects'>Lo que podemos hacer por tu marca, ya lo hicimos aquí.</h2>
                < CarouselProjects />
            </div>
        </section>
        </>
    )
}

export default Projects