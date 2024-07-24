
import React, { useEffect } from 'react';
import './gallery.css'

import chiskop from './pics/chiskop.png';
import fade from './pics/fade.png';
import highfade from './pics/highFade.png';
import lowcut from './pics/lowCut.png';



const Gallery = () => {
  useEffect(() => {
    
 const slider = document.querySelector('.slider');
 const slides = slider.querySelectorAll('li');
  
 // Store the total number of images
 const slideCount = slides.length;
 let activeSlide = 0;
  
 // To change the images dynamically every 
 // 5 Secs, use SetInterval() method
 setInterval(() => {
   slides[activeSlide].classList.remove('active');
   activeSlide++;
   if (activeSlide === slideCount) {
     activeSlide = 0;
   }
   slides[activeSlide].classList.add('active');
 }, 5000);
  }, []);

  return (
    <center>
        <div class="slider">
            <ul>
                <li>
                    <img src= {chiskop} alt="chiskop"/>
                    
                </li>
                <li>
                    <img src=  {highfade} alt="highfade"/>
                    
                </li>
                <li>
                    <img src=  {fade} alt="fade"/>
                  
                </li>
                <li>
                    <img src=  {lowcut} alt="lowcut"/>
                   
                </li>
            </ul>
        </div>
    </center>
  );
};

export default Gallery;


