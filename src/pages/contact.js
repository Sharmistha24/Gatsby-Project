import React from 'react'
import Link from 'gatsby-link'
import Contactform from '../components/assets/contact-form'
import Img2 from '../images/img1.png'

// import Map from '../components/assets/map'

const Contact = () => {
 return (
  <div>
  
  <div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt >
				 <img src={Img2} alt="Card Image" />
			</div>

			<Contactform/>
		</div>
	</div>


  </div>
);
}

export default Contact
