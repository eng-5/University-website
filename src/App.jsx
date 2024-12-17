import Hero from './components/Hero/Hero.jsx'
import Program from './components/Program/Program.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.scss';
const App = () => {
  return (
   <>
    <Hero/>
    <Program/>
    <About/>
     <Campus/>
     <Testimonials/>
     <Contact/>
     <Footer/>
   </>
  );
};

export default App;
