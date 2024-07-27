import React from 'react'

const Data = () => {

    const handleEmailClick = () => {
      window.location.href = 'mailto:akshaymr83@gmail.com?subject=Hello&body=Hi there, I wanted to reach out to you.';
    };
  return (
  <div className="home__data">
    <h1 className="home__title">Akshay M R
   
                
                </h1>
                <h3 className="home__subtitle animated-text">I'm a <span></span></h3>
                <p className="home__description">I'm a Creative Web designer based in Kerala,and i'm very passionate and dedicated to my work.</p>
               <button style={{background:'none'}} onclick="window.location.href='mailto:akshaymr83@gmail.com'"><a href=""  className="button buton--flex" >
                    Say Hello
                   
                </a></button> 
  </div>
  )
}

export default Data