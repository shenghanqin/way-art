import './styles.styl'
import Link from '../link-html';

export default function Home(props) {
  return (
    <header className="container">
      <Link name='About Us' href='./about-us'></Link>
    </header>
  )
}