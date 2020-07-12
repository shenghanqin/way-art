import React, { Fragment, PureComponent } from 'react'
import DocumentMeta from '../../components/document-meta'
import Header from '../../components/header'
import Footer from '../../components/footer'

import './styles.styl'

export default class Home extends PureComponent {
  state = {
    isShow: false
  }
  componentDidMount() {
    console.log('123 :>> ', 123);
  }

  render() {
    const { title, list = [] } = this.props
    const { isShow } = this.state
  
    return (
      <Fragment>
        <DocumentMeta title="Way Art" />
        <Header />
        
        <div className={`container ${isShow ? 'page-show' : 'page-none'}`}>
          <div className="home-serivice">
            <img src="./images/index-0.png" />
          </div>
          <div className="home-list">
            {
              list.map((item, index) => {
                const { img, title, text } = item
                return (
                  <div className="home-item" key={index}>
                    <img src={'./images/' + img} alt={title} />
                    <div className="home-item-desc">
                      <h2>{title}</h2>
                      <p>{text}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {
    
  }

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      title: 123,
      list: [
        {
          img: 'index-1.png',
          title: 'Way to Education',
          text: '专注"国际化艺术指导、专业作品集培训、留学艺术规划、世界名校申请”等多元化服务，具有一流的海外高校、一流教师队伍。'
        },
        {
          img: 'index-2.png',
          title: 'Way to Master',
          text: '邀请意大利知名钢琴演奏家、小提琴演奏家、著名设计师等国宝级 大师，来华参访面对面教学指导，集中交流，感受大师风采。'
        },
        {
          img: 'index-3.png',
          title: 'Way to Art',
          text: '欧洲历史名城走访，艺术殿堂级院校音乐、美术、设计类课程，体验欧 式艺术课堂；世界知名博物馆参观讲解，了解欧洲特色鲜明的文化建筑； 与当地学生共同创作表演，参与当地艺术类活动，提升艺术经历。'
        },
        {
          img: 'index-4.png',
          title: 'Way to Business',
          text: '为企业定制化行程，参访欧洲龙头企业及科研机构，全程陪 同参访欧洲全境官方机构及企业，提供全方位的海外商业投资服务。'
        },
        {
          img: 'index-5.png',
          title: 'Way to Life',
          text: '优化资产配置，欧洲投资，移居欧洲定制方案。'
        }
      ]
    }
  }
}