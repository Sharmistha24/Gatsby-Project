import React from 'react';
import Link from 'gatsby-link';

const Testimonial = (props) => {

  return(
   
    <testimonial>
    <div className="inner">

     
  <div className="row direction-column testimonials">

<div className="heading centered">
  <h2>You're at the right place</h2>
  <p>See what our clients say about us</p>
</div>

<div className="column testimonial">
  <p className="message">We needed a multi tenant app for managing gyms, our clients, their diets, their progress, history, etc and they took care of everything.</p>
  <p className="author">Dhruv Kumar Jha</p>
</div>

<div className="column testimonial">
  <p className="message">They did a perfect job building a mobile application for us, They delivered just in a week and it was cross platform.</p>
  <p className="author">Jason — CEO at Alpha Project</p>
</div>

<div className="column testimonial no-border">
  <p className="message">Got a super fast, responsive application delivered quickly for my financial startup, Really happy to work with them.</p>
  <p className="author">Deepak — CEO at Financial Startup</p>
</div>


</div>

    </div>
  </testimonial>
  );
}


export default Testimonial;
