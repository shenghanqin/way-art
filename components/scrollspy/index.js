import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { throttle } from '../../utils/event-utils'
import Affix from '../affix'
import styles from './styles.styl'
import { scrollToY } from '../../utils/scroll-to-y'

const NAV_NAME_REF = 'nav_name_ref'

const cx = require('classnames/bind').bind(styles)

function isEqualArray(a, b) {
  return (
    a.length === b.length && a.every((item, index) => {
      return item === b[index]
    })
  )
}

export default class Scrollspy extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentClassName: PropTypes.string.isRequired,
    pageBgColor: PropTypes.string,
    normalBgColor: PropTypes.string,
    normalTextColor: PropTypes.string,
    activeBgColor: PropTypes.string,
    scrolledPastClassName: PropTypes.string,
    style: PropTypes.object,
    componentTag: PropTypes.string,
    offset: PropTypes.number,
    rootEl: PropTypes.string,
    onUpdate: PropTypes.func,
    useTabBar: PropTypes.bool,
    tabNavHeight: PropTypes.number
  }

  static defaultProps = {
    items: [],
    currentClassName: '',
    pageBgColor: '',
    normalBgColor: '',
    normalTextColor: '',
    activeBgColor: '',
    style: {},
    componentTag: 'ul',
    offset: 0,
    onUpdate: (index, elm) => { },
    useTabBar: false,
    useScrollAnimation: false, // 懒加载数据是为false，一次性加载为true
    tabNavHeight: 45
  }

  constructor(props) {
    super(props)

    this.state = {
      targetItems: [],
      inViewState: [],
      isScrolledPast: [],
      leftPositions: [],
      tmpCurrentIndex: -1
    }

    this.mannualScrolling = false
    this.scrollToPosition = 0

    // manually bind as ES6 does not apply this
    // auto binding as React.createClass does
    this._handleSpy = this._handleSpy.bind(this)
    this.isOpenScroll = true
  }

  componentDidMount() {
    this._initFromProps()
    this.onEvent()
    this.autoSelected()
  }

  _initFromProps() {
    const targetItems = this._initSpyTarget(this.props.items)

    this.setState({
      targetItems,
    })

    this._spy(targetItems)
  }
  
  // 设置 目标 ID 的方式
  _initSpyTarget(items) {
    const targetItems = items.map((item) => {

      return document.getElementById(item)
    })

    return targetItems
  }

  offEvent() {
    const el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window

    el.removeEventListener('scroll', this._handleSpy)
  }

  onEvent() {
    const el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window

    el.addEventListener('scroll', this._handleSpy)
  }


  // 自动跳转到对应的位置
  autoSelected = () => {
    let hash = window.location.hash
    if (hash) {
      if (hash) {
        let liList = document.querySelectorAll('.scrollspy-list li')
        if (liList) {
          liList.forEach(item => {
            if (item.children) {
              if (item.children[0].dataset['id'] === hash) {
                this.navClick({
                  target: {
                    dataset: item.children[0].dataset
                  }
                })
              }
            }
          })
        }
      }
    }
  }

  // 当前高亮的导航项 居中
  setNavCenter = () => {
    if (!this.iScrollElm) return
    let idx = this.state.inViewState.indexOf(true)
    if (!(idx >= 0)) return

    let elm = this[NAV_NAME_REF + idx]
    if (!elm) return
    
    let iScrollWidth = this.iScrollElm.offsetWidth
    let elmWidth = elm.offsetWidth
    let dataX = elm.offsetLeft
    let scrollX = dataX - iScrollWidth / 2 + elmWidth - 23

    this.iScrollElm.scrollLeft = scrollX
  }

  toggleNavOpen = () => {
    this.setState({
      tabOpen: !this.state.tabOpen
    })
  }

  setNavClose = () => {
    this.setState({
      tabOpen: false
    })
  }

  navClick = (event) => {
    this.setNavClose()
    const { useScrollAnimation } = this.props
    const hash = event.target.dataset['id']
    const index = event.target.dataset['index']
    console.log('hash, index :>> ', hash, index);
    if (!hash) return

    let navElm = document.getElementById(hash.replace('#', ''))


    if (navElm) {
      this.setState({
        tmpCurrentIndex: parseInt(index, 10)
      }, () => {
        this.isOpenScroll = false
        let scrollToPosition = navElm.offsetTop- this.props.tabNavHeight * 0.8
        if (useScrollAnimation) {
          let duration = 1000
          setTimeout(() => {
            this.isOpenScroll = true
            this._spy()
            this.setState({
              tmpCurrentIndex: -1
            })
          }, duration - 200)
          scrollToY({
            scrollTargetY: scrollToPosition,
            speed: duration,
          })
        } else {
          this.isOpenScroll = true
          this._spy()
          this.setState({
            tmpCurrentIndex: -1
          })
          window.scrollTo(0, scrollToPosition)
        }
      })
    }

  }

  // 判断是在视野范围内
  _spy(targets) {
    const elemensViewState = this._getElemsViewState(targets)
    const currentStatuses = this.state.inViewState

    this.setState({
      inViewState: elemensViewState.viewStatusList,
      isScrolledPast: elemensViewState.scrolledPast
    }, () => {
      this._update(currentStatuses)
    })
  }

  // 延迟事件
  _handleSpy() {
    if (!this.isOpenScroll) {
      return
    }
    throttle(this._spy(), 100)
  }

  _update(prevStatuses) {
    if (isEqualArray(this.state.inViewState, prevStatuses)) {
      return
    }
    const { tabOpen } = this.state
    if (!tabOpen) {
      this.setNavCenter()
    }

    this.props.onUpdate(this.state.inViewState.indexOf(true), this.state.targetItems[this.state.inViewState.indexOf(true)])
  }

  // https://github.com/makotot/react-scrollspy/pull/45
  _fillArray(array, val) {
    let newArray = []

    for (let i = 0, max = array.length; i < max; i++) {
      newArray[i] = val
    }

    return newArray
  }

  _isScrolled() {
    return this._getScrollDimension().scrollTop > 0
  }

  _getScrollDimension() {
    const doc = document
    const { rootEl } = this.props
    const scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : (doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop)
    const scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : (doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight)

    return {
      scrollTop,
      scrollHeight,
    }
  }

  // 判断元素在视野之内 state
  _getElemsViewState(targets) {
    let elemsInView = []
    let elemsOutView = []
    let viewStatusList = []

    const targetItems = targets ? targets : this.state.targetItems

    let hasInViewAlready = false

    for (let i = 0, max = targetItems.length; i < max; i++) {
      let currentContent = targetItems[i]
      let isInView = hasInViewAlready ? false : this._isInView(currentContent)

      if (isInView) {
        hasInViewAlready = true
        elemsInView.push(currentContent)
      } else {
        elemsOutView.push(currentContent)
      }

      const isLastItem = i === max - 1
      const isScrolled = this._isScrolled()

      // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769
      const isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled

      if (isLastShortItemAtBottom) {
        elemsOutView.pop()
        elemsOutView.push(...elemsInView)
        elemsInView = [currentContent]
        viewStatusList = this._fillArray(viewStatusList, false)
        isInView = true
      }

      viewStatusList.push(isInView)
    }

    return {
      inView: elemsInView,
      outView: elemsOutView,
      viewStatusList,
      scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList),
    }
  }

  // 判断是否在里面
  _isInView(el) {
    if (!el) {
      return false
    }

    const { rootEl, offset, tabNavHeight } = this.props
    let rootRect

    if (rootEl) {
      rootRect = document.querySelector(rootEl).getBoundingClientRect()
    }

    const rect = el.getBoundingClientRect()
    const winH = rootEl ? rootRect.height : window.innerHeight
    const { scrollTop } = this._getScrollDimension()
    const scrollBottom = scrollTop + winH
    const elTop = rootEl ?
      rect.top + scrollTop - rootRect.top + offset
      :
      rect.top + scrollTop + offset
    const elBottom = elTop + el.offsetHeight

    return (elTop < scrollBottom) && (elBottom > scrollTop + tabNavHeight)
  }

  // 判断是否到底
  _isAtBottom() {
    const { rootEl } = this.props
    const { scrollTop, scrollHeight } = this._getScrollDimension()
    const winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight
    const scrolledToBottom = (scrollTop + winH) >= scrollHeight

    return scrolledToBottom
  }

  // 是否滚动到最后一个
  _getScrolledPast(viewStatusList) {
    if (!viewStatusList.some((item) => item)) {
      return viewStatusList
    }

    let hasFoundInView = false

    const scrolledPastItems = viewStatusList.map((item) => {
      if (item && !hasFoundInView) {
        hasFoundInView = true

        return false
      }

      return !hasFoundInView
    })

    return scrolledPastItems
  }



  render() {
    const Tag = this.props.componentTag
    const {
      children,
      className,
      scrolledPastClassName,
      style,
      useTabBar,
      pageBgColor,
      normalBgColor,
      normalTextColor,
      activeBgColor,
    } = this.props
    const { tabOpen, inViewState, tmpCurrentIndex, isScrolledPast } = this.state
    let counter = 0

    const currentStyle = {
      backgroundColor: activeBgColor,
      color: normalTextColor
    }
    const currentOpenStyle = {
      color: activeBgColor
    }

    const normalStyle = {
      color: normalTextColor
    }

    const tabBgStyle = {
      backgroundColor: normalBgColor
    }

    const tabMoreBgStyle = {
      backgroundColor: pageBgColor
    }

    const btnArrowStyle = {
      borderColor: normalTextColor
    }

    const items = React.Children.map(children, (child, idx) => {
      if (!child) {
        return null
      }

      let isCurrent = tmpCurrentIndex > -1 ? (tmpCurrentIndex === idx) : inViewState[idx]
      const ChildTag = child.type
      const isScrolledPast2 = scrolledPastClassName && isScrolledPast[idx]

      const childClass = classNames({
        [`${child.props.className}`]: child.props.className,
        [`${this.props.currentClassName}`]: isCurrent,
        [`${this.props.scrolledPastClassName}`]: isScrolledPast2,
      })

      return (
        <ChildTag {...child.props}
        className={childClass}
        key={counter++} 
        ref={c => this[`${NAV_NAME_REF}${idx}`] = c}
        onClick={this.navClick}
        >
          {React.Children.map(child.props.children, (subChild, subIdx) => {
            if (!subChild) {
              return null
            }
            
            const SubChildTag = subChild.type
            
            return (
              <SubChildTag {...subChild.props}
                data-index={idx}
                className={subChild.props.className}
                key={subIdx}
                style={isCurrent ? (tabOpen ? currentOpenStyle : currentStyle) : normalStyle}
              >
                {subChild.props.children}
              </SubChildTag>
            )
          })}
        </ChildTag>
      )
    })

    const itemClass = classNames({
      [`${className}`]: className,
    })

    if (useTabBar) {
      return (
        <div className={cx('scrollspy-outer')}>
          <Affix>
            {tabOpen && <div className={cx('scrollspy-mask')} onClick={this.setNavClose}></div>} 
            <div className={cx('scrollspy-wrap', { open: tabOpen })} style={tabBgStyle}>
              <div className={cx('scrollspy-btn-wrap')}>
                <div className={cx('scrollspy-btn')} onClick={this.toggleNavOpen}>
                  <div className={cx('scrollspy-text')} style={normalStyle}>收起</div>
                  <div className={cx('scrollspy-arrow')} style={btnArrowStyle}></div>
                </div>
              </div>
              <div className={cx('scrollspy-iscroll')} style={tabOpen ? tabMoreBgStyle : {}}  ref={s => this.iScrollElm = s}>
                <Tag className={itemClass} style={style}>
                  {items}
                </Tag>
              </div>
            </div>
          </Affix>
        </div>
      )
    }

    return (
      <Tag className={itemClass} style={style}>
        {items}
      </Tag>
    )
  }
}