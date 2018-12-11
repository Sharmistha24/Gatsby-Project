import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Head from '../components/assets/head'
import Footer from '../components/assets/footer'


import Header from '../components/header'

// import './index.css'
import './style.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
     
<Head/>
    
    <div
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '0px 1.0875rem 1.45rem',
      //   paddingTop: 0,
      // }}
    >
      {children()}

    <Footer/>
       
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
