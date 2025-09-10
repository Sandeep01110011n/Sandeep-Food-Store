import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Sandeep Food Store</h1>
                {/* <img src={assets.logo} alt="" /> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aspernatur consequuntur facilis laborum sed nostrum doloribus atque voluptatibus! Voluptatem vel fugiat molestias voluptas dolores temporibus delectus distinctio, commodi pariatur ad.</p> */}
                <p>Thank you for visiting my Food Store! Hope you enjoyed browsing. Please visit again!</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>6388896179</li>
                <li>sandeep01110011@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright @Sandeep Kumar - All Right Reserved.</p>
    </div>
  )
}


export default Footer
