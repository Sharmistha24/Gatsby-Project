import React from 'react';
import Link from 'gatsby-link';

const Header = (props) => {

  return(
   
    <header>
    <div className="inner">

     <h1><Link to="/">GraphQL Consulting</Link></h1>
      <nav>
        <a href="" className="button primary">Features</a>
        <a href="" className="button default">Open Source</a>
      </nav>

    </div>
  </header>
  );
}


export default Header;
