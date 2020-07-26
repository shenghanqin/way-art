import './styles.styl'
import Link from '../link-html'
import Scrollspy from 'react-scrollspy'

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <Link href='/' addHtml={false}>
            {/* Way Art 官网 */}
            Way Art
          </Link>
        </h1>
        <nav className="site-nav">
          <Scrollspy items={['slide', 'about', 'contact']} currentClassName="nav-active" componentTag={'ul'} scrolledPastClassName={"last-name"}>
            <li><a href="/#slide">OUR BUSINESS</a></li>
            <li><a href="/#about">ABOUT US</a></li>
            <li><a href="/#contact">CONTACT US</a></li>
          </Scrollspy>
        </nav>
      </div>
    </header>
  )
}
