import React, { Fragment } from 'react'
import Page from '../../components/page'
import Scrollspy from '../../components/scrollspy'

import './styles.styl'

export default class Teacher extends React.Component {

  render() {
    const { list } = this.props

    let _tabEleIds = list.map(tab => `tab-${tab.img}`)

    return (
      <Page title="Teacher" pageClassName="page-teacher">
        <div className='page-container'>
          <div className="teacher-slider">
            <Scrollspy
              items={_tabEleIds}
              currentClassName={('item-active')}
              className={'scrollspy-list'}
              useTabBar={true}
              useScrollAnimation={true}
              pageBgColor="#262626"
              normalBgColor="#262626"
              normalTextColor="#fff"
              activeBgColor="#0061FF"
            >
              {
                list.map((item, tabIndex) => {
                  const { img, slug, title } = item
                  let dataId = `#tab-${img}`
                  return (
                    <li className={('scrollspy-item')} key={img}>
                      <div data-id={dataId} className={('scrollspy-item-inner')}>
                        <img data-id={dataId} className="item-img" src={'./images/' + img + '.png'} alt={title} />
                        <div data-id={dataId} className="item-title">{title}</div>
                        <div data-id={dataId} className="item-slug">{slug}</div>
                      </div>
                    </li>
                  )
                })
              }
            </Scrollspy>
          </div>
          {
            list.map((item => {
              const { img, title, subTitle, text, works } = item
              return (
                <div className="teacher-item" key={title} id={'tab-' + img}>
                  <div className="teacher-image">
                    <img src={'./images/' + img + '.png'} alt={title} />
                  </div>
                  <h2>{title}</h2>
                  <h4>{subTitle}</h4>
                  <p>{text}</p>
                  {
                    works && (
                      <div className="teacher-works">
                        <h5>Representative <br /> Works</h5>
                        <h6>代表作品</h6>
                        <p>{works}</p>
                      </div>
                    )
                  }
                </div>
              )
            }))
          }
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
      list: [
        {
          img: 'teacher-1',
          title: 'Sergio Rao',
          subTitle: '塞尔吉·饶',
          slug: '米兰音乐学院歌唱老师',
          text: `目前是米兰音乐学院歌唱老师\n著名合唱指挥家、作曲家和歌剧演唱家\n\n
              西西里出生的塞尔吉·饶（Sergio Rao）在父亲的带领下于10岁开始音乐研究。他在帕尔马，皮亚琴察和布雷西亚音乐学院继续学业，毕业于合唱指挥，作曲和歌剧演唱。\n
              在Busseto的威尔第剧院（Verdi Theatre）出道后，他受到国际最著名的剧院和音乐会机构的邀请，例如维罗纳竞技场，皮亚琴察市剧院，帕尔马雷吉奥剧院，克雷莫纳的Amilcare Ponchielli剧院，贝加莫的多尼采蒂剧院，大剧院布雷西亚，帕维亚的弗拉基尼剧院，伊里亚河谷节，拉文纳的阿利吉耶里剧院，科莫社交剧院，米兰的维拉剧院，雅典的希律阁楼剧院，皮亚琴察的萨拉·迪·蒂蒂尼剧院。意大利美声唱法的角色。`,
          works: `曲目包括威尔第，普契尼，比才和多尼采蒂等作家的作品，包括茶花女，波西米亚人，纳布科，托斯卡，唐帕斯夸莱，卡门，唐 乔瓦尼和费加罗的婚礼。他还曾在《 波希米亚人》中扮演马尔切洛，在《 唐帕斯夸莱》中扮演马拉斯皮纳，在《 费加罗的婚礼》中扮演费加罗，还与国际知名指挥家合作，包括里卡尔多穆蒂，皮埃尔-乔治-莫兰迪，马可-布莱塔，米凯拉-斯波提,以及罗伯特·德·西蒙妮（Roberto De Simone），利奥·努奇（Leo Nucci），米哈尔·兹那涅茨基，阿方索·安东尼奥齐（Alfonso Antoniozzi），阿尔贝托·奥利瓦（Alberto Oliva）等导演。\n
定期与艺术大师Marco Beretta指挥的米兰ADAD学院乐团合作，在Busseto的Verdi剧院演出作品和举办音乐会。`
        },
        {
          img: 'teacher-2',
          title: 'MICHELE PORCELLI',
          subTitle: '米凯莱·波切利',
          slug: '著名男中音歌唱家',
          text: `意大利著名男中音歌唱家
米兰斯卡拉歌剧院签约演员

米兰威尔第音乐学院声乐系教授、招生主考官

韩国大邱广城大学音乐学院、釜山大学音乐学院、
中央天学音乐学院、首尔国立大学音乐学院客座教授。

俄罗斯国立师范大学音乐学院
和意大利米兰比可卡大学联办声乐、钢琴伴奏专业博士项目负责人。`,
          works: `歌剧：《阿依达》《诺亚方舟》《贾尼 · 史基〉《露易丝受辱记》《图兰朵〉《波西米亚人》《托斯卡和波西》《托斯卡》《乡村骑士》《外套》《爱之甘醇》《凯普莱特与蒙太古》《费朵拉》<阿莱城的姑娘》《鲍里斯 · 戈都诺夫》《费加罗的婚礼》《劳罗罗西的黑色多米诺》《弄臣》《唐.卡罗》《清教徒》《乡村骑士》和《丑角》等20余部歌剧。

唱片：《霍尔布兹海峡》《游唱诗人》《国王〉《黑色多米诺》《尼禄大帝》，以及与卡雷拉斯 · 里恰蕾丽合作的《费朵拉》。`
        },
        {
          img: 'teacher-3',
          title: 'SIMONA MARZILLI',
          subTitle: '西蒙娜·马尔齐利',
          slug: '著名女高音歌唱家',
          text: `意大利著名女高音歌唱家


她出生于坎波巴索，在坎波巴索“ L.Perosi”音乐学院的女高音M. Gentile的指导下，然后在Luciano Di Pasquale进行了歌唱研究。她于2009年9月以优异的成绩毕业。`,
          works: `扮演的经典角色：费加罗（Susanna），唐·乔瓦尼（Zerlina），吉安尼·斯基奇（Lauretta），塞维利亚的理发师（贝塔），迪多和埃涅阿斯（第一女巫和声乐合奏）的婚礼，狄·西玛罗莎（D. Cimarosa）的女性把戏（ Ersilia），Macbeth（第三次露面），E。Galuppi（乡村）的乡村哲学家，L.Chailly（纳塔利），La Carmen（奔驰），La Serva Padrona（塞尔皮纳）的求婚。`
        },
        {
          img: 'teacher-4',
          title: 'MONICA P.',
          subTitle: '',
          slug: '马兰欧尼时装学院教授',
          text: `马兰欧尼时装学院教授


1986年研究生毕业于马兰欧尼·1992年获得博士学位
——Fashion design and digital fashion design

1994年获得博士学位——Fashion image styling


1994年开始成为设计师和教授
在马兰欧尼米兰和伦敦校区授课
在日本东京和韩国首尔教学
拥有自己的时尚品牌still ill、love5
20年时尚行业教育经验，众多学生获得非凡成就`,
          works: ``
        },
        {
          img: 'teacher-5',
          title: 'Luciano di Nardo',
          subTitle: '',
          slug: '意大利时装界权威制版专家',
          text: `意大利时装界权威制版专家
资深服装技术教育专家


从业40余年，获得过多个设计制版类的奖项
是意大利著名的时装大师Gianfranco Ferre的专业老师
先后担任多家奢侈品牌制版总监及技术指导
服务的品牌有Missoni、Dolce&Gabbana、Cavalli、Krizia等
Luciano先生本人的品牌工作室为许多面料公司提供咨询服务`,
          works: ``
        },
        {
          img: 'teacher-6',
          title: 'A.A.F',
          subTitle: '',
          slug: '米兰国立美术学院教授',
          text: `意大利当代艺术家
米兰国立美术学院在职教授


米兰布雷拉美术学院的绘画技法和技术及当代艺术材料的教授2009-2011年，是卡坦扎罗美术学院绘画的终身教授
2005至今，在Santa Croce sull'Arno 的Banti研究所任教
2003-2004年，在里波利的Liceo Gobetti di Bagna任教
2003年，在佛罗伦萨的Incisa Val d'Arno 研究所任助理教授1990年至2002年，在佛罗伦萨圣心学院任教`,
          works: `2018 年
在Querceto 城堡举办个览
Dolceacqua 的Castello dei Doria 集体展览

2017 年
为Gossolengo 教堂（PIACENZA）绘制12 副十字架的板材

2015 年
在Vinciano 博物馆的集体展览
“......海的脚步......水的旅程......”VINCI Empoli。

在现代和当代艺术PISA的SMS展览中心举办
个人展览“......海的脚步......水的旅程......”。`
        },
        {
          img: 'teacher-7',
          title: 'Astore Biagio',
          subTitle: '',
          slug: '意大利艺术设计史教授',
          text: `意大利艺术设计史教授


1999年满分毕业于布雷拉美术学院舞台美术专业
2000年就职于“导师”文化协会
2008年-2011担任新技术以及版画教授
2011-2013担任艺术与图像教授
2013-2016年担任艺术史以及设计史教授`,
          works: `1999年参与“从电影到电影”项目
2000年，参与“Salone del Mobile(米兰国际家具展)”。
2000年，参与“MACEF（米兰家具用品展）”并设计展品。`
        },
      ],
    }
  }
}