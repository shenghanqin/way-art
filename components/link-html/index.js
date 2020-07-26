import Link from 'next/link'
import React from 'react'

export default class NavLink extends React.Component {
  render() {
    const { href = '', name = '', children = '', addHtml = true, hash = '' } = this.props

    // Must add passHref to Link
    return (
      <Link href={href} as={href + (addHtml && process.env.NODE_ENV === 'production' ? '.html' : '') + hash} passHref>
        <a>{name || children}</a>
      </Link>
    )
  }
}