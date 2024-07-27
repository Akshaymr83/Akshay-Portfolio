import React, { useState } from 'react';
import axios from 'axios';
import "./form.css";
import formimg from "../../assests/getintouch.png"
import Swal from 'sweetalert2'

const Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "19e5bbd6-df95-438e-9b32-5926435b4aee");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      await Swal.fire({
        title: "Sucess!",
        text: "Message Sent!",
        icon: "success"
      });
    }
  };

  return (
    <section className="works__section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in Touch</span>
      <div className='contact grid '>
        <img src={formimg} className='form_img'/>
        <div class="coolinput">
          <form  onSubmit={onSubmit}>
            <label for="input" class="text">Name:</label>
            <input type="text" placeholder="Name..." name="name" class="input"  />
            <br />
            <label for="input" class="text">Email:</label>
            <input type="email" placeholder="Email..." name="email" class="input" />
            <br />
            <label for="input" class="text">Project Details:</label>
            <input type="text" placeholder="Write here..." name="message" class="input"  id='project'   />
            <br />
            <button type='submit'  className='submit__button'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;