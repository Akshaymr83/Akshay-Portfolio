import React from 'react'
import "./services.css"
import { useState } from 'react';
import "./newservices.css"

const Services = () => {
    const [ toggleState,setToggleState]=useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
<section className="services__section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    {/* <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">Responsive <br />Webpage Creation</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab(1)}> View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"onClick={()=>toggleTab(0)}></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Provides Quality work to Clients and Companines.</p>

                    <ul className="services__modal-services grid">
                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Develop the User interface.</p>
                        </li>


                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Create Responsive Webpages.</p>
                        </li>



                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">WebPage Developmennt.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

       
        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">WebPage <br />Development</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab(2)} > View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Provides Quality work to Clients and Companines.</p>

                    <ul className="services__modal-services grid">
                    <li className='services__modal-service'>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Develop the User interface.</p>
                        </li>

                        <li className='services__modal-service'>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Create Responsive Webpages.</p>
                        </li>



                        <li className='services__modal-service'>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">WebPage Developmennt.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

<div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">Product  <br />Designer</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab(3)}> View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Product Designer</p>

                    <ul className="services__modal-services grid">
                    <li className='services__modal-service'>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Develop the User interface.</p>
                        </li>


                        <li className='services__modal-service'>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Create Responsive Webpages.</p>
                        </li>



                        <li className='services__modal-service'>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">WebPage Developmennt.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



        
    </div> */}
     <section className='cards grid'>
      
        <div class="e-card playing">
  <div class="image"></div>
  
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  

      <div class="infotop">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
  <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
  4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
  21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
  22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
  17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
  14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
  3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
  19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
  12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
  16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
  15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
  19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
   16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
   20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg>  
   <br />   
WEBPAGE <br /> DEVELOPMENT


<span className="services__button" onClick={()=>toggleTab(1)}> View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"onClick={()=>toggleTab(0)}></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">WEBPAGE DEVELOPMENT</p>

                    <ul className="services__modal-services grid">
                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Develop the User interface.</p>
                        </li>

                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Provides Quality work to Clients and Companines.</p>
                        </li>

                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Create Responsive Webpages.</p>
                        </li>



                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Build custom web applications tailored to the specific needs and requirements of clients..</p>
                        </li>
                    </ul>
                </div>
  </div>
</div>

</div>




{/* card2 */}
<div class="e-card playing ">
  <div class="image"></div>
  
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  

      <div class="infotop ">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
  <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
  4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
  21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
  22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
  17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
  14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
  3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
  19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
  12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
  16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
  15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
  19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
   16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
   20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg>  
   <br />   
  FRONTENND DEVELOPMENT


<span className="services__button" onClick={()=>toggleTab(2)}> View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"onClick={()=>toggleTab(0)}></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">FRONTEND DEVELOPMENT</p>

                    <ul className="services__modal-services grid">
                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Develop the User interface.</p>
                        </li>


                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Develop user-friendly and responsive frontend interfaces using React.js, HTML5, CSS3, and JavaScript.</p>
                        </li>
                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">   Provides Quality work to Clients and Companines.</p>
                        </li>

                     

                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Create websites that adapt seamlessly to various devices and screen sizes, ensuring a consistent experience across desktops, tablets, and smartphones.</p>
                        </li>
                    </ul>
                </div>
  </div>
</div>

</div>
{/* card3 */}
<div class="e-card playing">
  <div class="image"></div>
  
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  

      <div class="infotop">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
  <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
  4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
  21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
  22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
  17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
  14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
  3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
  19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
  12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
  16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
  15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
  19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
   16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
   20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg>  
   <br />   
API <br />
 DEVELOPMENT


<span className="services__button" onClick={()=>toggleTab(3)}> View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"onClick={()=>toggleTab(0)}></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">API DEVELOPMENT</p>

                    <ul className="services__modal-services grid">
                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info"> Integrate frontend interfaces with backend APIs to fetch and display dynamic content, enabling interactive and data-driven applications.</p>
                        </li>

                        <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Create robust and scalable APIs using Node.js and Express.js for frontend applications to interact with the backend services. </p>
                        </li>


                       
                    </ul>
                </div>
  </div>
</div>

</div>







    </section>
</section>
  )
}

export default Services