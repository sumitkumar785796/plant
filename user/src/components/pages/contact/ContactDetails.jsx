import React from 'react'

const ContactDetails = () => {
  return (
    <>
    {/* ##### Contact Area Info Start ##### */}
    <div className="contact-area-info section-padding-0-100">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        {/* Contact Thumbnail */}
        <div className="col-12 col-md-6">
          <div className="contact--thumbnail">
            <img src="logos.png" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-5">
          {/* Section Heading */}
          <div className="section-heading">
            <h2>CONTACT US</h2>
            <p>We are improving our services to serve you better.</p>
          </div>
          {/* Contact Information */}
          <div className="contact-information">
            <p><span>Address:</span> jail road Tambeswar Nagar near by Agrsen chauraha, Fatehpur, UttarPradesh 212601</p>
            <p><span>Phone:</span> +919918771888</p>
            <p><span>Email:</span> info.manavatanurssery@gmail.com</p>
            <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
            <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Contact Area Info End ##### */}
  {/* ##### Contact Area Start ##### */}
  <section className="contact-area">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-lg-5">
          {/* Section Heading */}
          <div className="section-heading">
            <h2>GET IN TOUCH</h2>
            <p>Send us a message, we will call back later</p>
          </div>
          {/* Contact Form Area */}
          <div className="contact-form-area mb-100">
            <form action="#" method="post">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" id="contact-name" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input type="email" className="form-control" id="contact-email" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="text" className="form-control" id="contact-subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control" name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary mt-15">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          {/* Google Maps */}
          <div className="map-area mb-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.5552752590188!2d80.79766371243804!3d25.94160747438078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c8355fcb7a191%3A0x54fbf80545fc7fe1!2sMANAVTA%20NURSERY!5e0!3m2!1sen!2sin!4v1722100863428!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Contact Area End ##### */}
    </>
  )
}

export default ContactDetails