import React from 'react';
import Link from 'gatsby-link';
import Img1 from '../../images/clients/1.png'
import Img2 from '../../images/clients/2.png'
import Img3 from '../../images/clients/3.png'
import Img4 from '../../images/clients/4.png'
import Img5 from '../../images/clients/5.png'
import Img6 from '../../images/clients/6.png'

const Clients = (props) => {

  return(
   
    <clients>
    <div className="inner">

  <div className="row clients">

<div className="column">
  <img src={Img1} alt="Client"/>
</div>
<div className="column">
  <img src={Img2} alt="Client"/>
</div>
<div className="column">
  <img src={Img3} alt="Client"/>
</div>
<div className="column">
  <img src={Img4} alt="Client"/>
</div>
<div className="column">
  <img src={Img5} alt="Client"/>
</div>
<div className="column">
  <img src={Img6} alt="Client"/>
</div>


</div>


    </div>
  </clients>
  );
}

export default Clients;