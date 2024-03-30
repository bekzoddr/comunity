import React, { memo } from "react";

function ContactData() {
  return (
    <div className="contact__data">
      <div className="contact__title">
        <div className="title__info">
          <h1>
            Have a question ? Let’s <br /> get in touch with us.
          </h1>
          <br />
          <h4>Fill up the Form and ou team will get back to within 24 hrs</h4>
        </div>
        <div className="location">
          <h2>Location</h2>
          <p>
            DLF Cybercity, Bhubaneswar, <br /> India, &52050
          </p>
        </div>
        <div className="contactt">
          <h2>Contact Us</h2>
          <p>
            020 7993 2905 <br />
            hi@finsweet.com
          </p>
        </div>
      </div>
      <div className="contact__form">
        <form action="">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="email addres" />
          <textarea
            placeholder="type messages"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>submit</button>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0728840437946!2d69.2012376755285!3d41.28551820230848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1711834981007!5m2!1sen!2s"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default memo(ContactData);
