import styles from '@/styles/Book.module.css';
import Image from 'next/image';
import Link from 'next/link';
 const Filter=()=>{
  return (
   <>
      <div className={styles.filter}>
         <Link href="/"  className={styles.b1}>
         <Image src="/img/image3.svg" className="card-img-top" alt="..." width={60} height={60} />
         <p className={styles.p}>الأشهر اليوم</p>
         </Link>
         <Link href="/"  className={styles.b2}>
         <Image src="/img/image1.svg" className="card-img-top" alt="..." width={60} height={60} />
         <p className={styles.p}>أشهر الكتب</p>
         </Link>
         <Link href="/"  className={styles.b3}>
         <Image src="/img/image2.svg" className="card-img-top" alt="..." width={60} height={60} />
         <p className={styles.p}>أحدث الكتب</p>
         </Link>
      </div>
   </>
  );
}

export default Filter;
