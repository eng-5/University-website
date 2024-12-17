import {useEffect, useState} from 'react';
import './nav.scss';

const Nav = () => {
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
       window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ?setSticky(true):setSticky(false);
       })
  },[]);
  return (
    <div className={`nav__container ${sticky?'nav__bg':''} small__nav`}>
      <div className="container">
  <div className="nav">
    <div className="logo"><h1>Edusity</h1></div>
    <ul>
      <li>Home</li>
      <li>Program</li>
      <li>About us</li>
      <li>Campus</li>
      <li>Testimonials</li>
      <li><a href="#contact" className="btn">Contact us</a></li>
    </ul>
  </div>

      </div>
    </div>
  )
};

export default Nav;
