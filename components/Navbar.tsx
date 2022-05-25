
import styles from '../components/Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
       { menuItems.map( ({text, href}) => (
          <ActiveLink key={href} text={text} href={href}/>
        ))}
    </nav>
  )
}
