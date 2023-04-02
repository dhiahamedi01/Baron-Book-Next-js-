import Navstyle from '../../styles/Nav.module.css'
import Link from 'next/link';
import Image from 'next/image';
export default function Nav() {
    return (
      <>
      <div className={Navstyle.nav}>
      <div className={Navstyle.logo}>
        <Image src="/img/logo.png" alt="Ma super image" width={200} height={40} />
      </div>

      <label for="click" className="menu-btn">  
      </label>
      <ul>
        <li><Link href="/">Acceuil</Link></li>
        <li><Link href="../service/Service">Services</Link></li>
        <li><Link href="/">Blog</Link></li>
        <li><Link href="/">Contact</Link></li>
        <li><Link href="/">à propos</Link></li>
      </ul>
      <ul>
		  <li><Link href="/" className={Navstyle.active}>Connexion</Link></li>
		  <li><Link href="/" className={Navstyle.active2}>Inscription</Link></li>
		</ul>
      </div>
      </>
    )
  }