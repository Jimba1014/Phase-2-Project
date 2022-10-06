import React from 'react'; 
import Creator1 from "../assets/Creator1.jpg"
import Creator2 from "../assets/Creator2.jpg"
import Drum from "../assets/Drum.jpg"
import Mello from "../assets/Mello.jpg"

function AboutUs() {
    return(
        <div className='about'>
           <h2 >About The Creators</h2>
           <div>
            <img className='creator-img'
            src={Creator2} 
            alt="Jim Baldridge"/>
            <img className='creator-img'
            src={Creator1} 
            alt="Briana Brewster"/>
           </div>

           <div className='about-creators'>
            <p>
                Meet the creators of the app, Jim Baldridge and Briana Brewster!<br></br>
                Briana's interest in music began when she joined her school's music program at 10 years old. 
                She began playing the French Horn and later branched out to playing other instruments, including trumpet, piano, and guitar.<br></br> 
                Jim's musical interests started whe he learned to play the drums in his school's band program in 4th grade. 
                Jim's interest in music has continued to grow and has played drum throughout
                highschool and college. Jim currently teaches the drumline at his old High School.<br></br>
                Jim and Briana wanted to apply their interest and love for music toward creating a platform for members of their Flatiron Cohort 
                to share their own musical interests and backgrounds with each other!
            </p>
            <div>
            <img className='creator-img'
            src={Drum} 
            alt="Jim playing drums"/>
            <img className='creator-img'
            src={Mello} 
            alt="Briana playing mellophone"/>
           </div>

           </div>
        </div>
    )
}

export default AboutUs;