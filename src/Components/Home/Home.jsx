import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smalltext">
            Our Packages
          </span>
          <h1 className="hometitle">
            Search Your Holiday
          </h1>
        </div>
        
        <div className="carDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' />
              <GrLocation className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
