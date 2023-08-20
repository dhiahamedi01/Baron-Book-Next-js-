import styles from '@/styles/Book.module.css';
import Image from 'next/image';
import Link from 'next/link';
 const Filter=()=>{
  return (
   <>
      <div className={styles.filter2}>
         <Link href="/"  className={styles.b5}>
         <Image src="/img/Auth.svg" className="card-img-top" alt="..." width={60} height={60} />
         <p className={styles.p}>أشهر الكتب</p>
         </Link>
         <Link href="/"  className={styles.b6}>
         <Image src="/img/Auth2.svg" className="card-img-top" alt="..." width={60} height={60} />
         <p className={styles.p}>أحدث الكتب</p>
         </Link>
      </div>
   </>
  );
}

export default Filter;
