import Link from 'next/link';
import style from '@/styles/Sidebar.module.css';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function Sidebar() {

  return (
    <div className={style.sidebar}>
      <div className={style.logodetails}>
        <span className={style.logoname}>
          <Image src="/img/titre.png" alt="" width={180} height={40} />
        </span>
      </div>
      <ul className={style.navlinks}>
        <li>
          <Link href={{ pathname: '/' }} className={style.active}>
            <i className="fas fa-tachometer-alt" aria-hidden="true"></i>
            <span className={style.span}>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: 'http://localhost:3000/Administrateur/profil' }}>
            <i className="fas fa-user"></i>
            <span className={style.span}>Profil</span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: 'http://localhost:3000/Administrateur/profil' }}>
            <i className="fas fa-user"></i>
            <span className={style.span}>Profil</span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: 'http://localhost:3000/Administrateur/profil' }}>
            <i className="fas fa-user"></i>
            <span className={style.span}>Profil</span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/' }}>
            <i className="fas fa-users"></i>
            <span className={style.span}>Communauté</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
