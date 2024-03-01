import React from 'react'
import rehaish from '../../../assets/1.gif'
import a1 from '../../../assets/2.gif'
import a2 from '../../../assets/3.gif'
import a3 from '../../../assets/4.gif'
import banner from '../../../assets/banner.gif'
import banner1 from '../../../assets/banner1.png'




function MainScreen() {
  return (
    <div>
       <main>
      <div class="p1">
        <section class="container grid1">
          <div id="image1">
            <h2>Welcome to Rehaish</h2>
            <h4>Home away from Home</h4>
            <p>
              Our moto is to provide you with the top rated hostels that feels like home.
                
            </p>
          </div>
          <div id="image2">
            <img src={rehaish} alt="" />
          </div>
        </section>
      </div>
      

      <div class="p2">
        <div class="headingp2">
          <h1>How Can We Help You?</h1>
          <p>
           
           
          </p>
        </div>
        <section class="container grid2">
          <div>
            <img src={a1} alt="image not found" />
            <h3>Top rated Hostel</h3>
           
          </div>
          <div>
            <img src={a2} alt="image not found" />

            <h3>Near by You</h3>
          
          </div>
          <div>
            <img src={a3} alt="image not found" />

            <h3>Hostel Owner</h3>
           
          </div>

    
            
        </section>
        
       
      </div>
      <div class="p3">
        
        <section class="container grid3">
          <div>
          
           
          </div>
          

         </section>
         </div>

     

      <footer class="foot">
      <div class="foo grid4">
        <div>
          Rehaish! The solution of all the problems even you are a student or a hostel owner.
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>Project</li>
            <li>Portfilo</li>
            <li>Our Team</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h2>Areeb Ahmad</h2>
          <h2>20I-0679</h2>
        </div>
      </div>
      <hr />
      <br />
      <p>Copyright © 2023 FAST Islamabad | Areeb Ahmad 20I-0679</p>
      <br /><br />
    </footer>
    </main>
    </div>
  )
}

export default MainScreen
