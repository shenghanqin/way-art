import Link from 'next/link'

function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href + (process.env.NODE_ENV === 'production' ? '.html' : '')} passHref>
      <a>{name}</a>
    </Link>
  )
}

export default NavLink