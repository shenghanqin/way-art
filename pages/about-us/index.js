import React, { Fragment } from 'react'
import DocumentMeta from '../../components/document-meta'
import Header from '../../components/header'
import Footer from '../../components/footer'

import './styles.styl'

export default function AboutUs() {

  return (
    <Fragment>
      <DocumentMeta title="About - Way Art" />
      <Header />
      <div className="container">
        <div className="home-list2">
         
          关于我们
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}