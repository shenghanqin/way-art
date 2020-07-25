import React, { Fragment } from 'react'
import Page from '../../components/page'

import './styles.styl'

export default function Study() {

  return (
    <Page title="Way Art 院校">

    </Page>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {

  }

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      list: [
        {
          img: 'index-1.png',
          title: 'Way to Education',
          text: '专注"国际化艺术指导、专业作品集培训、留学艺术规划、世界名校申请”等多元化服务，具有一流的海外高校、一流教师队伍。'
        },
      ],
    }
  }
}