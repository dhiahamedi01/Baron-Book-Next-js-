import styles from '../../styles/Book.module.css';
import Image from 'next/image';
const Book1=()=>{
  return (
   <>
   <div className="container">
      <div className="row row-cols-2 row-cols-md-4 g-3">
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src="/img/Book4.jpg" className="card-img-top" alt="#" width={160} height={250}  />
            <div className={styles.cardbd}>
              <h5 className={styles.h5}>أنت لي</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src="/img/book5.jpg" className="card-img-top" alt="#" width={160} height={250} />
            <div className={styles.cardbd}>
              <h5 className={styles.h5}>أنتيخريستوس</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src="/img/book2.jpg" className="card-img-top" alt="..." width={160} height={250} />
            <div className={styles.cardbd}>
              <h5 className={styles.h5}>رجالات المقداد</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src="/img/book3.jpg" className="card-img-top" alt="..." width={160} height={250}  />
            <div className={styles.cardbd}>
              <h5 className={styles.h5}>السر</h5>
            </div>
          </div>
        </div>
      </div>
    </div><br></br><br></br>
   </>
  );
}

export default Book1;
