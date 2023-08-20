import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import { useEffect, useState } from "react";
import Modal from "react-modal";
const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchIsOpen, setsearchIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal1 = () => {
    setsearchIsOpen(true);
  };

  const handleCloseModal1 = () => {
    setsearchIsOpen(false);
  };
  return (
    <>
    <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light`} style={{ backgroundColor: '#3ea87f' }}>
      <div className="container">
        <Link href="/" className={styles.title}>
          <div className={`navbar-brand ${styles.logo}`}>BARON<span style={{color:"#ffa137"}}>BOOK</span></div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav mx-auto ${styles.navItems}`}>
            <li className="nav-item">
              <Link href="/">
                <div className={`nav-link ${styles.navLink}`}><i className="fas fa-home"></i>&ensp;الرئيسية</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="http://localhost:3000/Book">
                <div className={`nav-link ${styles.navLink}`}><i className="fas fa-book"></i>&ensp;الكتب</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <div className={`nav-link ${styles.navLink}`}> <i className="fa fa-users"></i>&ensp;المؤلفون</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" onClick={handleOpenModal}>
                <div className={`nav-link ${styles.navLink}`}>   <i className="fas fa-list-ul"></i>&ensp;القائمة</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" onClick={handleOpenModal1}>
                <div className={`nav-link ${styles.navLink}`}><i className="fas fa-search"></i>&ensp;بحث</div>
              </Link>
            </li>
          </ul>
          <div className="ml-auto">
          <Link href="http://localhost:3000/Login">
          <button type="button" className="btn btn-outline-light"><span className={styles.btntext}> دخول <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg></span></button></Link>&ensp;
          <Link href="http://localhost:3000/inscription">
          <button type="button" className={`btn btn-warning ${styles.button}`}>إنشاء حساب <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
          </svg></button></Link>
        </div>
        </div>
      </div>
    </nav>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <Link href="/" className={styles.block3}>
      <span className={styles.text}>
      <i class="fa fa-sitemap"></i>&nbsp;&nbsp;أقسام الكتب
      </span>
      </Link>
      <Link href="/" className={styles.block}>
      <span className={styles.text}>
      <i class="fa fa-users"></i>&nbsp;&nbsp;مؤلفو الكتب
      </span>
      </Link>
      <Link href="/" className={styles.block}>
      <span className={styles.text}>
      <i class="fa fa-quote-left"></i>&nbsp;&nbsp;اقتباسات الكتب      </span>
      </Link>
      <Link href="/" className={styles.block}>
      <span className={styles.text}>
      <i class="fa fa-star"></i>&nbsp;&nbsp;مراجعات الكتب
      </span>
      </Link>
      <Link href="/" className={styles.block}>
      <span className={styles.text}>
      <i class="far fa-id-card"></i>&nbsp;&nbsp;مجتمع المثقفين
      </span>
      </Link>
      <Link href="/" className={styles.block}>
      <span className={styles.text}>
      <i class="fa fa-upload"></i>&nbsp;&nbsp;نشر كتاب
      </span>
      </Link>
      <div className={styles.block2} onClick={handleCloseModal}>
        <span className={styles.text2}>
         <i class="fas fa-window-close"></i>&nbsp;&nbsp;إغلاق
        </span>
      </div>
     
    </Modal>

    <Modal
      isOpen={searchIsOpen}
      onRequestClose={handleCloseModal1}
      className={styles.modalsearch}
      overlayClassName={styles.overlay}
    >
      <div className={styles.head}>
      <span className={styles.texts}>البحث عن كتاب</span>
      <span className={styles.close} onClick={handleCloseModal1}><i className="fas fa-times"></i></span>
      </div>
      <div className={styles.body}>
      <input type="text" className={styles.input} placeholder="إبحث عن كتاب  "/>
      <button className={styles.btn}> بحث&ensp;<i className="fas fa-search"></i></button>
      </div>

    </Modal>
    </>
  );
};

export default Navbar;
