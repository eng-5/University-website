import {useRef} from 'react';
import data from './testimonial';
import './testimonials.scss';

const Testimonials = () => {
  const scrollBar = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();
  // const leftArrow =useRef();
  // const rightArrow =useRef();
  // const scrollPosition = (e)=>{
  //   if(e.target.classList[0] == 'left'){
  //     console.log(scrollbar.current.scrollLeft);
  //     scrollbar.current.scrollLeft -= 237;
  //   }else if(e.target.classList[0] == 'right'){
  //     console.log(scrollbar.current.scrollLeft);
  //     scrollbar.current.scrollLeft += 237;
  //   }
    
  // }
  let val =0;
  
  const moveForward = ()=>{
    if(val > -50){
      val -= 25;
    }
    scrollBar.current.style.transform =`translateX(${val}%)`;
    if (val <= -50){
      rightArrow.current.style.opacity = 0;
    }
    if (val < 0){
      leftArrow.current.style.opacity = 1;
    }
  }
  const moveBackward= ()=>{
    if(val < 0){
      val += 25;
    }
    scrollBar.current.style.transform =`translateX(${val}%)`;
    if (val > -50){
      rightArrow.current.style.opacity = 1;
    }
    if (val >= 0){
      leftArrow.current.style.opacity = 0;
    }
  }
  
  return (
    <section className="testimonials">
  <div className="container">
    <div className="testimonials__content">
  <div className="testimonials__heading">
    <h3>TESTIMONIALS</h3>
    <h2>What Student Says
    </h2>
  </div>
  <div className="testimonials__arrows">
  <div ref={leftArrow} onClick ={moveBackward} className=" left arrow__nav">&larr;</div>
  <div ref={rightArrow} onClick ={moveForward} className=" right arrow__nav">&rarr;</div>
  </div>
  <div  className="testimonials__scroll">
  <div ref={scrollBar} className="testimonials__card-container">
  {
      data.map((item,i)=>{
        return(
          <div key={i} className="testimonials__card">
            <div className="testimonials__card__heading">
              <img src={item.image} alt="students image" />
              <div className="testimonials__card__heading-text">
                <h3>
                {item.name}
                </h3>
                <p>
                {item.location}
                </p>
              </div>
            </div>
            <p className='testimonials__card__paragraph'>{item.comment}</p>
          </div>
        );
      }
      )
    }
  </div>


  </div>
   
    </div>
  </div>
 </section>
  );
};

export default Testimonials;
