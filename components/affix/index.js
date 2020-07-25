
import React, { Component } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const AFFIX_CLASSNAME = 'ui-affix'

export default class Affix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 'static',
      width: null,
      placeHoldStyle: {}
    }
    this.affix = false
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  pin() {
    this.affix = true
    this.setWidth()
    this.setState({ position: 'fixed' })
  }

  unpin() {
    this.affix = false
    this.setState({
      position: 'static',
      width: null,
      placeHoldStyle: {}
    })
  }

  getViewportSize() {
    // http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
    const doc = document.documentElement
    return {
      width: Math.max(doc.clientWidth, window.innerWidth || 0),
      height: Math.max(doc.clientHeight, window.innerHeight || 0)
    }
  }

  setWidth() {
    if (!this.elRef) return null

    this.setState({
      width: this.elRef.offsetWidth,
      placeHoldStyle: {
        width: '100%',
        height: this.elRef.offsetHeight
      }
    })
  }

  updatePin() {
    const affix = this.affix
    const props = this.props
    let reallyNum, propsNum

    if (this.elRef === null) {
      return
    }

    if (props.offsetBottom !== undefined) {
      reallyNum = this.getViewportSize().height - this.elRef.getBoundingClientRect().bottom
      propsNum = props.offsetBottom
    } else {
      reallyNum = this.elRef.getBoundingClientRect().top
      propsNum = props.offsetTop
    }

    if (affix && reallyNum > propsNum) {
      this.unpin()
    }
    if (!affix && reallyNum <= propsNum) {
      this.pin()
    }
  }

  handleScroll = () => {
    this.updatePin()
  }

  getStyleObj() {
    const { zIndex, offsetBottom, offsetTop } = this.props
    const { position, width } = this.state
    let styleObj = {}

    if (position === 'fixed') {
      styleObj = { position, zIndex, width }
      offsetBottom !== undefined
        ? (styleObj.bottom = offsetBottom)
        : (styleObj.top = offsetTop)
    } else {
      styleObj = { position }
    }

    return styleObj
  }

  render() {
    const {  className, placeHoldClassName } = this.props
    const { position } = this.state

    return (
      <div
        className={placeHoldClassName}
        style={this.state.placeHoldStyle}
        ref={el => this.elRef = el}
      >
        <div className={cx(`${AFFIX_CLASSNAME} ${className}`, { [`${AFFIX_CLASSNAME}-fixed`]: position === 'fixed' })}
          style={{
            ...this.getStyleObj()
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

Affix.propTypes = {
  /**
   * 最外层定位用元素的 className
   */
  placeHoldClassName: PropTypes.string,
  /**
   * 包裹 children 的元素的 className
   */
  className: PropTypes.string,
  /**
   * 默认 10
   */
  zIndex: PropTypes.number,
  /**
   * Affix 固定在顶部时，距离顶部的距离，默认 10
   */
  offsetTop: PropTypes.number,
   /**
   * Affix 固定在底部时，距离底部的距离
   */
  offsetBottom: PropTypes.number
}


Affix.defaultProps = {
  className: '',
  offsetTop: 0,
  zIndex: 10
}
