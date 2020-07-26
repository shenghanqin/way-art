import React, { Fragment } from 'react'
import Page from '../../components/page'

import './styles.styl'

export default class Teacher extends React.Component {

  render() {
    const { schools, classes } = this.props

    return (
      <Page title="Education" pageClassName="page-study">
        <div className='page-container'>

          <div className="study-section" id="shool">
            <div className="section-header">
              合作院校
            </div>
            <div className="school-list">
              {
                schools.map(school => {
                  const { img, title, text } = school
                  return (
                    <div className="school-item" key={img}>
                      <img src={'./images/' + img} />
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="study-section" id="class">
            <div className="section-header">
              课程简介
            </div>
            <div className="class-list">
              {
                classes.map(item => {
                  const { img, title, text } = item
                  return (
                    <div className="class-item"  key={img}>
                      <img src={'./images/' + img} />
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="study-section" id="environment">
            <div className="section-header">
              学校环境
            </div>
            <div className="env-list">
              <div className="env-left">
                {[1, 2, 3, 4].map(item => {
                  return (
                    <div className="img-item" key={item}>
                      <img key={item} src={'./images/env-' + item + '.png'} />
                    </div>
                  )
                })}
              </div>
              <div className="env-right">
                <img src={'./images/env-5.png'} />
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
      schools: [
        {
          img: 'school-1.png',
          title: '米兰布雷拉国立美术学院',
          text: '已有242年历史的布雷拉美院位于米兰市中心老街布雷拉街道，每年的米兰时装周与设计周，布雷拉美术学院都是主展区，在这里能够很轻松的接触到全球最一线的视觉艺术与设计理念。作为全意大利最大的美术学院布雷拉美院分为两个校区，视觉艺术BRERA校区；设计与应用ZARA校区。'
        },
        {
          img: 'school-2.png',
          title: '都灵美术学院',
          text: '始建于1833年，是一所存在将近两个世纪之久的美术学院，在十七世纪前半页就作为培养画家、雕塑家和建筑师的大学存在于世，然后在1652年变为"圣.路卡画会"并第一次开始担当起艺术学院的角色，随后在1678年由玛利亚·乔瓦娜(卡洛·埃马努埃莱二世的遗孀)效仿巴黎皇家学院而确立，最终成为绘画、雕塑与建筑学院。'
        },
        {
          img: 'school-3.png',
          title: '威尼斯美术学院',
          text: '威尼斯美术学院是一所拥有260多年历史的世界著名老牌美院，培养了波提切利;提香;乔尔乔内；丁托列托等众多西方艺术大师，在美术院校中享有崇高声誉。它还是文艺复兴时期“威尼斯画派”的阵地，对于后来的欧洲艺术乃至世界艺术发展影响深远。世界美院排名前十、是意大利高等文化与艺术教育领域的最高学府之一。'
        },
        {
          img: 'school-4.png',
          title: '马兰欧尼学院',
          text: '建立于1935年，是世界公认的时尚界最高学府，最著名的.设计学院，时装教育最高殿堂，世界设计学院领导者， 世界三大时装学院之一。学院自创校至今，马兰欧尼服装设计学院已为时装界培养了30000 多名专业设计人才，其中包括有Dolce & Gabbana公司的创始人Domenico Dolce和MOSCHINO的创始人Franco Moschino。'
        },
        {
          img: 'school-6.png',
          title: '新加坡莱佛士设计学院',
          text: '莱佛士教育集团在全球的13个国家20个城市运营着22个学院，是亚太地区规模最大的专业跨国、教育集团。1990年在新加坡建立第一所学院，我们致力于培养行业发展需求的优秀设计师以及真正掌握未来设计领域设计师所具备的专业知识技能人才。课程多样，包含设计、商学、心理学课程。提供国际认可，国内认证的专科、本科以及硕士课程，意味全球顾主都认可你的学历与证书。'
        },
        {
          img: 'school-5.png',
          title: '欧洲设计学院',
          text: '欧洲设计学院（Istituto Europeo di Design）简称IED，IED是一个国际化的教育网络，但有着纯正的意大利“血统”。在逾50年的历史中，IED主要活跃于创意产业的培训和研究领域，涵盖的学科包括设计, 时尚, 视觉艺术, 传播和管理。IED的使命是为青年才俊提供全面深入的理论与实践培训，向他们灌输对事业成功至关重要的“设计知识和思维模式”。'
        },
      ],
      classes: [
        {
          img: 'class-1.png',
          title: '服装设计',
          text: '服装设计专业旨在通过各种探索性和实验性课程培养学生对服装设计的深层理解，将使学生了解从设计理念、设计程序直到最后制作的全过程，同时也教授必要的商务及其它相关知识。本专业采用整体化教学方式，将创意与实用技能进行有机结合。在既精通技术又对市场潮流独具慧眼的前提下，学生将通过他们的创作形成自己的风格和特点。学校培养学生能够适应瞬息万变的市场需求和科技发展潮流，因此服装设计的毕业生们能够在快节奏的服装产业中胜任专业化的工作。'
        },
        {
          img: 'class-2.png',
          title: '时尚营销',
          text: '时装营销专业是为了让学生理解：如果一个学生想要步入专业时尚领域，必须拥有创造力及商业意识。这门课程提供给学生学习的机会，使他们拥有专业知识和技巧，以便更有效地形成他们自己的观点并学会表达。拥有商业、营销及相关课程的扎实基础再加上有创造力的时尚知识，本专业学生可以学会理解产品、顾客和市场人员是如何组合在一起工作的，以及如何应付技术以及时尚产业内的相关问题所带来的新挑战。经过训练，他们可以作出战略性决策并有信心地提出有效方案。'
        },
        {
          img: 'class-3.png',
          title: '室内设计',
          text: '室内设计专业学习的是在一个建筑环境下，围绕结合建筑与设计这两者之间的内容而展开的课程。而重点则放在在有限的所给环境中人类的交流活动。本课程为所有想成为职业室内设计师的学生们提供了一系列的强化培训与课程。重点课程放在空间设计，创意与问题解决，交流技巧与建筑材料知识，建筑构造知识，电脑辅助绘图设计及室内设计历史讲解。'
        },
        {
          img: 'class-4.png',
          title: '平面设计',
          text: '学习平面设计需要深入理解平面设计师在历史、社会和研究方面所发挥的作用。学生将有机会探索平面设计的解决方案带来的文化、经济和社会影响。通过主要的实践项目，学生将运用多学科技能来展现有创意且有实践性的方案，并结合创意、观念和电脑软件技能，为迎接竞争激烈的广告业和印刷业生涯做好准备。'
        },
        {
          img: 'class-5.png',
          title: '多媒体设计',
          text: '多媒体设计专业旨在让学生掌握基本的平面设计技巧，在此之后学生将通过设计界面的方式将平面图转换为立体效果，同时运用不同的设计程序描绘互动媒介，学生有机会调查多媒体设计的发展趋势以及社会问题，在考虑文化经济和社会互动因素之后制定设计方案。'
        },
      ]
    }
  }
}