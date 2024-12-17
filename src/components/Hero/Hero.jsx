import Nav from '../Nav/Nav.jsx'
import './hero.scss';
const Hero = () => {
  return (
    <header id='home' className='hero'>
    <Nav/>
        <div className="container">
    <div className="hero_text">
    <h1>We Ensure better education <span>for a better world</span></h1>
    <p>Our cutting edge curriculum is designed to empower students with knowledge, skill and experiences needed to excel in the dynamic field of education </p>
    
    <a href="#program" className='btn btn__hero'>Explore more <span>&rarr;</span></a>
    </div>
        </div>
  </header>
  )
};

export default Hero;
