import './styles.styl'
import Link from '../link-html'
import cx from 'classnames'


export default function Header(props) {
  return (
    <header className="header">
      <h1 className="logo">
        <Link href='./'>
          <img src="./images/logo.png" alt='Way Art' />
        </Link>
      </h1>
      <ul className="site-nav">
        <li>
          <Link href='./about-us'>OUR BUSINESS</Link>
        </li>
        <li>
          <Link href='./about-us'>ABOUT US</Link>
        </li>
        <li>
          <Link href='./contact-us'>CONTACT US</Link>
        </li>
      </ul>
    </header>
  )
}