import React from 'react'
import "./qualification.css";


const Qualification = () => {
  return (
    <section className="services__section" id="services">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My Education Qualification</span>

      <div className='education grid'>
        
        <div className='box-1'>
            <ul>
                <li><h3>INTERSHIP</h3></li>
                <p className='map-icon'><i class="uil uil-map-marker"></i> Softronics,Palakkad,Kerala</p>
                <p className='date-icon'><i class="uil uil-calendar-alt"></i>: 2023</p>

                <li><h3>Bachelors's Degree in Computer Application</h3></li>
                <p className='map-icon'><i class="uil uil-map-marker"></i> Hindustan College Of Arts And Science ,Coimbatore,Tamilnadu</p>
                <p className='date-icon'><i class="uil uil-calendar-alt"></i>: 2020-2023</p>
            </ul>
         
        </div>
        

{/* //////////////// */}
<div className='box-2'>
            <ul>
                <li><h3>HigherSecondary</h3></li>
                <p className='map-icon'><i class="uil uil-map-marker"></i> PMG High School,Palakkad,Kerala</p>
              
                <p className='date-icon'><i class="uil uil-calendar-alt"></i>: 2018-2020</p>

                <li><h3>HigherSchool</h3></li>
                <p className='map-icon'><i class="uil uil-map-marker"></i> Bharathamatha Higher Secondary School,Palakkad,Kerala</p>
              
                <p className='date-icon'><i class="uil uil-calendar-alt"></i>: 2018</p>
            </ul>
            
        
        </div>

      </div>
      
      
      

    </section>
  )
}

export default Qualification