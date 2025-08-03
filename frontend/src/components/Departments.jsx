import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Departments() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidestoSlide:1,
    },
    desktop: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidestoSlide:1
    },
    tablet: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidestoSlide:1
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidestoSlide:1
    }
  };
  const departments = [
    {
      name: "Cardiology",
      imageUrl: "/cardiology.jpg"
    },
    {
      name: "Neurology",
      imageUrl: "/neurology.jpg"
    },
    {
      name: "Pediatrics",
      imageUrl: "/pediatrics.jpg"
    },
    {
      name: "Orthopedics",
      imageUrl: "/radiology.jpg"
    },
    {
      name: "Dermatology",
      imageUrl: "/dermatology.jpg"
    },
    {
      name: "Gynecology",
      imageUrl: "/gynocolgy.jpg"
    },
    {
      name: "Radiology",
      imageUrl: "/radiology1.jpg"
    },
    {
      name: "ENT (Ear, Nose, Throat)",
      imageUrl: "/ent.jpg"
    },
    {
      name: "General Surgery",
      imageUrl: "/general.jpg"
    }
  ];
  
  return (
    <div className='container departments'>
      <h2>Departments</h2>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet" , "mobile"]}>
  {
    departments.map((depart,index)=>{
      return(
        <div className="card" key={index}>
          <div className="depart-name">{depart.name}</div>
          <img src={depart.imageUrl} alt={depart.name} />
        </div>
      )
    })
  }
</Carousel>
      
    </div>
  )
}
