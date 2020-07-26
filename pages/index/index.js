import React, { Fragment, PureComponent } from 'react'
import Page from '../../components/page'
import Slider from "react-slick"
import Link from '../../components/link-html'

import './styles.styl'

export default class Home extends PureComponent {
  state = {
    isShow: false
  }
  componentDidMount() {
    console.log('123 :>> ', 123);
  }

  render() {
    const { title, list = [], cards = [] } = this.props
    const { isShow } = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
  
    return (
      <Page title="Way Art" pageClassName="page-home">
        <div className='page-container'>
          <div className="home-list" id="slide">
            <Slider {...settings}>
              {
                list.map((item, index) => {
                  const { img, title, text } = item
                  return (
                    <div className="home-item" key={index}>
                      <img src={'./images/' + img} alt={title} />
                      <div className="home-item-mask"></div>
                      <div className="home-item-desc">
                        <h2>{title}</h2>
                        <p>{text}</p>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
          <div className="home-cards">
            {
              cards.map(item => {
                const { icon, text, link, hash } = item
                return (
                  <div key={text} className="card-item">
                    <Link href={link} hash={hash}>
                      <img src={'./images/' + icon} alt={text} />
                      <p>{text}</p>
                    </Link>
                  </div>
                )
              })
            }
          </div>
          <div className="home-about" id="about">
            <h2>关于 Way Art</h2>
            <h4>About Us</h4>
            <img src="./images/icon-blue.png" />
            <p>WAY ART成立于2020年，致力于海外艺术文化领域的教育与投资, 为中国学生和企业提供一站式海外研学和实践培 训服务，同时也协助中国企业和企业家遴选海外项目遴选及优化资产配置。</p>
            <p>WAY ART专注"国际化艺术指导、专业作品集培训、留学艺术规划、世界名校申请”等多元化服务。同时，WAY ART以尊重艺术，培养未来新兴艺术家为基础，致力于为学生建立正统的西方艺术思维方式。</p>
          </div>
          <div className="home-contact" id="contact">
            <h2>联系 Way Art</h2>
            <h4>Contact Us</h4>
            <img src="./images/icon-blue.png" />
            <p>咨询电话：<a href="tel:400-915-5927">400-915-5927</a></p>
            <div className="home-contact-qrcode">
              <div className="qrcode-text">
                客服微信：<br />
                搜索“way-art”<br />
                或扫描二维码添加好友
              </div>
              <div className="qrcode-image">
                <img src="./images/way-art-helper.png" />
              </div>
            </div>
            <div className="home-contact-qrcode">
              <div className="qrcode-text">
                微信公众号：<br />
                Way Art<br />
                或扫描二维码关注我们
              </div>
              <div className="qrcode-image">
                <img src="./images/way-art-mp.png" />
              </div>
            </div>
          </div>
        </div>
      </Page>
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
      ],
      cards: [
        {
          icon: 'icon-1-school.png',
          text: '合作院校',
          link: '/study',
          hash: '#school'
        },
        {
          icon: 'icon-2-teacher.png',
          text: '名师简介',
          link: '/teacher'
        },
        {
          icon: 'icon-3-class.png',
          text: '课程简介',
          link: '/study',
          hash: '#class'
        },
        {
          icon: 'icon-4-env.png',
          text: '教学环境',
          link: '/study',
          hash: '#environment'
        },
      ]
    }
  }
}