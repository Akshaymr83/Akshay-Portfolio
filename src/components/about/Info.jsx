import React from 'react'

import "./about.css"

const Info = () => {
  return (
 <div className="about__info grid" >

    <div className="about__box"><i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 Months InternShip at Softronic,Palakkad</span>
    </div>



    <div className="about__box"><i class='bx bx-support about__icon'></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online24x7</span>
    </div>

  
 </div>
  )
}

export default Info