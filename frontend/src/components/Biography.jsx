import React from 'react'

export default function Biography({imageUrl}) {
  return (
    <div  className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente numquam odit blanditiis, nobis fuga a expedita aspernatur alias doloribus quidem. Mollitia quo excepturi odit, inventore minima assumenda atque quidem aliquid ut enim repellat facilis rem minus fugiat accusantium impedit aut expedita blanditiis rerum quas repellendus reprehenderit. Dicta, veritatis sint.</p>
      
     
      </div>
      
    </div>
  )
}
