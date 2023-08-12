import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  
  }, [])

  return (
    <section className='footer' >
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon" />
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            The Professional Association of Resident Physicians of Alberta (PARA) endeavours to provide 
            effective representation for physicians completing further training in a residency program.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <BsInstagram className="icon"/>
              <BsFacebook className="icon"/>
              <BsWhatsapp className="icon"/>
            </div>

            <div className="footerLinks grid">
              {/* Group 1 */}
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>
              </div>
              {/* Group 2 */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Bookings
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  CarRentals
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  HostelWorld
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Trip Advisor
                </li>
              </div>
              {/* Group 3 */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Ocenia
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  London
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  California
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Indonesia
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Europe
                </li>
              </div>
            </div>

            <div className="footerDiv flex">
              <small>EXPLORE WITH US</small>
              <small>CopyRights Reserved - SJ</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
