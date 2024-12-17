import './contact.scss';

const Contact = () => {
  return (
  <section className="contact">
    <div className="container">
      <div className="contact__container">
      <div className="contact__heading">
      <h3>CONTACT US</h3>
      <h2>Get in Touch</h2>
      </div>
      <div className="contact__info">
        <div className="contact__info-1">
          <h2>Send us a message</h2>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question and suggestions are important to us as we strive to provide exceptional services tou our university community
          </p>
          <ul>
            <li>Contact@GreatStack.dev</li>
            <li>+1 123-456-7890</li>
            <li>77 Massachussetts Ave, Cambridge MA 02139, United States.</li>
          </ul>
        </div>
        <div className="contact__info-form">
        <form action="">
        <label htmlFor="name">Your name</label>
        <input type="text" name='name' id ='name'placeholder='Enter your name' required/>
        <label htmlFor="phone">Your name</label>
        <input type="phone" name='phone' id ='phone' placeholder='Enter your name' required/>
        <label htmlFor="message">Write your message here</label>
        <textarea name="message" id="message" rows ='5'
        placeholder='Enter your message'></textarea>
          <button className='btn btn__blue submit'>Submit now &rarr;</button>
        </form>
        </div>
      </div>

      </div>
      </div>
    </section>
  );
};

export default Contact;
