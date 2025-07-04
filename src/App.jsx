import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContacUs'
import Faqs from './components/Faqs/Faqs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PlanCards from './components/PlanCards/PlanCards'
import Projects from './components/Projects/Projects'
import Reviews from './components/Reviews/Reviews'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import Servicios from './components/Services/Services'
import TechRibbon from './components/TechRibbon/TechRibbon'

function App() {

  return (
    <>
      < Header />
      < Hero />
      < Servicios />
      < Projects />
      < PlanCards />
      < ContactUs />
      < AboutUs />
      < Faqs />
      < TechRibbon />
      < Reviews />
      < Footer />
      < ScrollToTopButton />
    </>
  )
}

export default App
