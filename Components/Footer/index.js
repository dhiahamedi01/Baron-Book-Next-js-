import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={`${styles.left} ${styles.box}`}>
          <div className={styles.upper}>
            <div className={styles.topic}>معلومات عنا</div>
            <p className={styles.p}>تحميل الكتب العربية والمترجمة والروايات والقصص مجانا بصيغة بي دي اف، وقراءة الكتب اونلاين. أسرع سيرفرات تحميل الكتب مجانا بروابط مباشرة</p>
          </div>
          <div className={styles.lower}>
            <div className={styles.topic}>اتصل بنا</div>
            <div className={styles.phone}>
              <Link href="#"className={styles.p}>21692031108+&ensp;<i className="fas fa-phone-volume"></i></Link>
            </div>
            <div className={styles.email}>
              <Link href="#" className={styles.p}>abc@gmail.com&ensp;<i className="fas fa-envelope"></i></Link>
            </div>
          </div><br></br>
        </div>
        <div className={`${styles.middle} ${styles.box}`}>
          <div className={styles.topic}>خدماتنا</div>
          <div><Link href="#" className={styles.p}>مكتبة المناهج التعليمية و الكتب الدراسية</Link></div>
          <div><Link href="#" className={styles.p}>مذكرات التخرج الجامعية</Link></div>
          <div><Link href="#" className={styles.p}>المكتبة العامة</Link></div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.p1}>حقوق الطبع والنشر © Nabil book  جميع الحقوق محفوظة 2023</p>
      </div>
    </div>
  );
};

export default Footer;
