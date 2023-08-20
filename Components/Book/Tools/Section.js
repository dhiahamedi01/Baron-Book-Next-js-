import styles from '@/styles/Book.module.css';
import style from '@/styles/Header.module.css';
import { useEffect, useState } from "react";
import Modal from "react-modal";
 const Section=()=>{
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
   <>
   <div className={styles.sections}>
    <div style={{display:"flex"}}>
    <span className={styles.span}>أقسام الكتب</span>
    <span className={styles.search} onClick={handleOpenModal}> <i className="fas fa-search"></i></span>
    </div><br></br>
    <div className={styles.item}>
    <span className={styles.span1}>الروايات والقصص الأدبية</span>
    <span className={styles.search1}><i className="fas fa-book"></i></span>
    </div>
    <div className={styles.item}>
    <span className={styles.span1}>الروايات والقصص الأدبية</span>
    <span className={styles.search1}><i className="fas fa-book"></i></span>
    </div>
    <div className={styles.item}>
    <span className={styles.span1}>الروايات والقصص الأدبية</span>
    <span className={styles.search1}><i className="fas fa-book"></i></span>
    </div>
    <div className={styles.item}>
    <span className={styles.span1}>الروايات والقصص الأدبية</span>
    <span className={styles.search1}><i className="fas fa-book"></i></span>
    </div>
    <div className={styles.item}>
    <span className={styles.span1}>الروايات والقصص الأدبية</span>
    <span className={styles.search1}><i className="fas fa-book"></i></span>
    </div>
   </div>

   <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      className={style.modalsearch}
      overlayClassName={style.overlay}
    >
   <div className={style.head}>
      <span className={style.texts}>البحث عن الأقسام</span>
      <span className={style.close1} onClick={handleCloseModal}><i className="fas fa-times"></i></span>
      </div>
      <div className={style.body}>
      <input type="text" className={style.input} placeholder="إبحث عن الأقسام  "/>
      <button className={style.btn}> بحث&ensp;<i className="fas fa-search"></i></button>
    </div>
    </Modal>
   
   </>
  );
}

export default Section;
