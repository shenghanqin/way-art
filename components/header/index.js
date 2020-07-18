import './styles.styl'
import Link from '../link-html'

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <Link href='./'>
            Way Art
          </Link>
        </h1>
        <ul className="site-nav">
          <li>
            <a data-type='slide' className='nav-active'>OUR BUSINESS</a>
          </li>
          <li>
            <a data-type='about'>ABOUT US</a>
          </li>
          <li>
            <a data-type='contact'>CONTACT US</a>
          </li>
        </ul>

      </div>
    </header>
  )
}
