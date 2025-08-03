import React from 'react'

export default function Hero({title,imageUrl}) {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>Zee Health Care Institute is dedicated to providing high-quality medical and health education. We offer a range of certified courses designed to prepare students for successful careers in healthcare. Our mission is to promote wellness through knowledge, skill, and compassionate care.</p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className='animated-image' />
        <span>
          <img src="/Vector.png" alt="Vector" />
        </span>
      </div>
      
    </div>
  )
}
