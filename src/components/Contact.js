import ParticlesBg from "particles-bg";
import React from "react";
import "./../index.css";
import emailjs from "emailjs-com";

const Contact = () => {

  

      function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm("service_3lsq1ob","template_71jhoak",e.target,"user_JxYcpEiPVzkbbLno49wBx")
          .then((result) => {
            if(result){
              alert('successfully your email send')
            }
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

 
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
      <ParticlesBg type="circle" bg={true} />
      <div className="profile-image"></div>
      <h1 className="heading text-white">Contact Me</h1>
      <div>
        <form onSubmit={sendEmail}>
          <div className='row pt-5 mx-auto'>
          <div className=' col-8 form-group mx-auto mb-2'>
            <input className='form-control' type='text' name='name' placeholder='Name' />
          </div>
      
          <div className=' col-8 form-group mx-auto mb-2'>
            <input  className='form-control' type='text' name='subject' placeholder='subject' />
          </div>

          <div className=' col-8 form-group mx-auto mb-2'>
            <input  className='form-control text-black' type='email' name='email' placeholder='email' />
          </div>
         
          <div className=' col-8 form-group mx-auto'>
            <textarea className='form-control' placeholder='messege' cols='15' rows='4' name='message'></textarea>
          </div>
          <div className=' col-8 form-group mx-auto' >
            <input className="button" type='submit' value='send messege' />
          </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
