import React from 'react';
import "./works.css";
import work1Img from "../../assests/work1.png";
import work2Img from "../../assests/work2.png";
import work3Img from "../../assests/work3.png";
import work4Img from "../../assests/work4.png";
import work5Img from "../../assests/work5.png";
import work6Img from "../../assests/work6.png";
import work7Img from "../../assests/work7.png";
import work8Img from "../../assests/work9.png";
import hospitalImg from '../../assests/Screenshot 2024-05-23 103716.png'
import foodImg from '../../assests/Screenshot 2024-07-21 000056.png'

const Works = () => {
  return (
    <section className="works__section" id="works">
      <h2 className="section__title">Works</h2>
      <span className="section__subtitle">My Recent Works</span>
      
      <div className="works__content grid">

      <div className='seemore'>
         <div class="card">
         <img src={foodImg} className='card__img' alt="" />
 <div class="card__content">
    <p class="card__title">FOOD ORDERING
    </p><p class="card__description">I'm excited to introduce FOOD MOOD, my latest project that revolutionizes food ordering with a blend of convenience and technology. Designed with user satisfaction in mind, FOOD MOOD offers a streamlined and engaging experience from browsing to payment.</p>
  </div>
</div>
<div><div><a href="https://www.linkedin.com/feed/update/urn:li:activity:7220499698640379906/" target='blank'><button type="button">see more</button></a></div></div>
      </div>


      <div className='seemore'>
         <div class="card">
         <img src={hospitalImg} className='card__img' alt="" />
 <div class="card__content">
    <p class="card__title">Hospital Management
    </p><p class="card__description">Excited to announce the launch of our latest project, a comprehensive hospital management system designed to streamline administrative tasks and enhance operational efficiency. 🌟
    🔹 Seamless Data Management: Leveraging MongoDB as our backend database, we ensure that entered data is securely stored and easily accessible.</p>
  </div>
</div>
<div><div><a href="https://www.linkedin.com/feed/update/urn:li:activity:7181607199905886208/" target='blank'><button type="button">see more</button></a></div></div>
      </div>
          


      <div className='seemore'>

        {/* -----------------------------------------------work1---------------------- */}
        <div class="card">
        
        <img src={work1Img} className='card__img' alt="" />
        
          <div class="card__content">
            <p class="card__title">Shoe App</p>
            <p class="card__description">Created a dynamic responsive react-based e-commerce.There are many features like category filtering,color selection and search mechanism.The strategic use of React's useState allows for dynamic updates and efficient state management, ensuring a responsive and user-friendly interface. An intriguing aspect of the project is the utilization of the useNavigate hook from the React Router library.   </p>
            
          </div>
          
         
        </div>
        <div><div><a href="https://www.linkedin.com/posts/akshay-mr_react-bootstrap-ecommerce-activity-7154368741273702400-qwSv?utm_source=share&utm_medium=member_desktop" target='blank'><button type="button">see more</button></a></div></div>
      </div>
      
     
              {/* -----------------------------------------------work-2----------------------------------------------*/}
              <div className='seemore'>
              <div class="card">
              <img src={work2Img} className='card__img' alt="" />
  <div class="card__content">
    <p class="card__title">Movie App
    </p><p class="card__description">Introducing Movieflix app ,a dynamic react application where vast collection of films ,provided by real time data fetched from TDMB Api.With the elegance of React hooks like useEffect and useState, coupled with seamless navigation courtesy of React Router, MovieFlix offers a seamless browsing experience.</p>
  </div>
</div>
<div><div><a href="https://www.linkedin.com/posts/akshay-mr_movieflix-reactjs-tmdb-activity-7160529580884201473-ExYz?utm_source=share&utm_medium=member_desktop" target='blank'><button type="button">see more</button></a></div></div>
      </div>

     
         {/* --------------------------------------------work3-------------------------------------------- */}
         <div className='seemore'>
         <div class="card">
         <img src={work3Img} className='card__img' alt="" />
 <div class="card__content">
    <p class="card__title">Hotel Webpage
    </p><p class="card__description">Embark on a virtual journey with my latest creation – a chic hotel booking webpage that doesn't just facilitate your travels but also dazzles with dynamic JavaScript animations! 🌟🏨
Experience seamless transitions, scroll-triggered effects, and a touch of magic that brings this digital haven to life.</p>
  </div>
</div>
<div><div><a href="https://www.linkedin.com/posts/akshay-mr_hotelbookingmagic-webdevwonders-javascriptanimations-activity-7138601244650082305-Tpdr?utm_source=share&utm_medium=member_desktop" target='blank'><button type="button">see more</button></a></div></div>
      </div>
        {/* -------------------------------work44------------------------------------------ */}
        <div className='seemore'>
        <div class="card">
        <img src={work4Img} className='card__img' alt="" />
          <div class="card__content">
            <p class="card__title">Weather App</p>
            <p class="card__description">Just wrapped up a JavaScript project – a modern and dynamic weather app! 🚀 The app fetches real-time weather data using the OpenWeatherMap API and dynamically updates the interface based on the user's location input. 🌍
🖼️ Integrated a variety of weather conditions – from clear skies ☀️ to thunderstorms ⛈️ – each represented with a corresponding image. The app provides not just the temperature but also humidity and wind speed details.</p>
          </div>
        </div>
        <div><div><a href="https://www.linkedin.com/posts/akshay-mr_javascript-webdevelopment-weatherapp-activity-7140750641575960576-16J2?utm_source=share&utm_medium=member_desktop" target='blank'><button type="button">see more</button></a></div></div>
      </div>



 {/* -----------------------------------------------work5---------------------- */}
 <div className='seemore'>
 <div class="card">
        <img src={work5Img} className='card__img' alt="" />
          <div class="card__content">
            <p class="card__title">EDUHOME webpage</p>
            <p class="card__description">Welcome to my EDUHOME website! As a beginner frontend developer, I'm excited to showcase my skills and projects through this responsive and visually captivating website created using HTML, CSS, and Bootstrap.Excited to share my beautiful designed project as a beginner frontend developer!  Created a responsive and visually appealing website using HTML, CSS, and Bootstrap. </p>
          </div>
        </div>
        <div><div><a href="https://www.linkedin.com/posts/akshay-mr_frontenddevelopment-webdevelopment-github-activity-7129875826044522496-gvMW?utm_source=share&utm_medium=member_desktop" target='blank'><button type="button">see more</button></a></div></div>
      </div>
     
              {/* -----------------------------------------------work-6----------------------------------------------*/}
              <div className='seemore'>
              <div class="card">
              <img src={work6Img} className='card__img' alt="" />

  <div class="card__content">
    <p class="card__title">FLIPKART clone
    </p><p class="card__description">Created a  Flipkart-inspired e-commerce webpage using only Bootstrap, HTML, and CSS.In this You can see many animation effects and many other.By combining Bootstrap, HTML, and CSS effectively, I've created a visually appealing and functional e-commerce webpage that mirrors the user experience of a popular platform like Flipkart.</p>
  </div>
</div>
<div><div><a href="https://www.linkedin.com/posts/akshay-mr_webdevelopment-bootstrap-html-activity-7132829276483031040-LBU_?utm_source=share&utm_medium=member_desktop" target='blank'><button type="button">see more</button></a></div></div>
      </div>

     
         {/* --------------------------------------------work7------------------------------------------- */}
         <div className='seemore'>
         <div class="card">
         <img src={work7Img} className='card__img' alt="" />
 <div class="card__content">
    <p class="card__title">Parallax Website
    </p><p class="card__description">Embark on a captivating journey through my latest creation: a Parallax Website that showcases my newfound skills in web development. With seamless parallax scrolling and three immersive sections adorned with stunning backgrounds, this project is a testament to my dedication and passion for crafting engaging online experiences.</p>
  </div>
</div>
<div><div><a href="https://www.linkedin.com/posts/akshay-mr_frontenddevelopment-webdevelopment-parallaxwebsite-activity-7128242406457556992-IAzk?utm_source=share&utm_medium=member_desktop" target='blank'><button type="button">see more</button></a></div></div>
      </div>

        {/* -------------------------------work8------------------------------------------ */}
        <div className='seemore'>
        <div class="card">
        <img src={work8Img} className='card__img' alt="" />
  <div class="card__content">
    <p class="card__title">PhotographyWebpage
    </p><p class="card__description">Immerse yourself in the artistry of code and creativity with my latest endeavor: a photography webpage meticulously crafted using HTML and CSS. With a passion for capturing moments and an eye for detail, I've curated an immersive digital gallery that celebrates the beauty of photography and showcases my burgeoning talents as a front-end developer.</p>
  </div>
</div>
<div><div><a href="https://www.linkedin.com/posts/akshay-mr_frontenddeveloper-webdesign-html-activity-7130099102331113472-KgiE?utm_source=share&utm_medium=member_desktop" target='blank'> <button type="button">see more</button></a></div></div>
    </div>
   
      </div>
    </section>

  )
}

export default Works