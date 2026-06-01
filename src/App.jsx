import React, { useState } from 'react'
import '../src/App.scss'

const slides = [
  {
    image: "https://images.pexels.com/photos/302304/pexels-photo-302304.jpeg",
    name: "Tiger"
  },
  {
    image: " https://images.pexels.com/photos/10136767/pexels-photo-10136767.jpeg",
    name: "Lion"
  },
  {
    image: "https://images.pexels.com/photos/31387041/pexels-photo-31387041.jpeg",
    name: "Leopard"
  },
  {
    image: "https://images.pexels.com/photos/7287817/pexels-photo-7287817.jpeg",
    name: "Bear"
  },
  {
    image: "https://images.pexels.com/photos/11245841/pexels-photo-11245841.jpeg",
    name: "Wolf"
  }
];

const App = () => {
    const[currentIndex,setCurrentIndex]=useState(0)

    function handleNext(){
        setCurrentIndex((currentIndex+1)%slides.length)
    }

    function handlePrev(){
        setCurrentIndex((currentIndex-1 + slides.length)%slides.length)
    }
    const nextImage= (currentIndex+1) %slides.length

  return (
    <div className='slider-container'>
      <div className='navbar'>
        <nav>
          <ul>
            <li className='nav-text'>Home</li>
            <li className='nav-text'>About</li>
            <li className='nav-text'>Gallery</li>
            <li className='nav-text'>Contact</li>
          </ul>
        </nav>
      </div>
        <div className='slider'>
            <img src={slides[currentIndex].image} className='main-img' />
<img src={slides[nextImage].image} className="next-img" />

            <div className='slid'>
                <h1>Beast's</h1>
            </div>
            <div className="image-info">
                <h1>{slides[currentIndex].name}</h1>
            </div>
             <div className="link">
            <button className='more'>See More</button>
            <button className='sub'>Subscribe</button>
            </div>
        </div>
       
        <div className="controls">
            <button onClick={handlePrev}>&lt;</button>
        <span>{currentIndex+1}/{slides.length}</span>
        <button onClick={handleNext}>&gt;</button> 
        </div>
        
        
    </div>
  )
}

export default App