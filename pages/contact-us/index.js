import React, { Fragment } from 'react'
import DocumentMeta from '../../components/document-meta'
import Header from '../../components/header'
import Footer from '../../components/footer'

import './styles.styl'

export default function ContactUs() {

  return (
    <Fragment>
      <DocumentMeta title="Contact - Way Art" />
      <Header />
      <div className="container">
        <div className="home-list">
         
          联系我们
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}