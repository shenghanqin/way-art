import Link from 'next/link'
import React from 'react'

export default class NavLink extends React.Component {
  render() {
    const { href = '', name = '', children = '', addHtml = true, hash = '' } = this.props

    // Must add passHref to Link

    let asLink = href

    // if (addHtml && process.env.NODE_ENV === 'production') {

    //   asLink += '.html'
    // }

    asLink += hash

    return (
      <Link href={asLink} as={asLink} passHref>
        <a>{name || children}</a>
      </Link>
    )
  }
}