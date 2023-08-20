import styles from '../../styles/Login.module.css';
import Link from 'next/link';
const Login=()=>{
  return (
   <>
     <img className={styles.wave} src="/img/wave.png" />
     <div className={styles.container}>
        <div className={styles.loginContent}>
          <div className={styles.form}>
            <div className={styles.header}>
            <img src="/img/avatar.svg" />
            <h2 className={styles.title}>تسجيل الدخول</h2>
            </div>
            <div className={styles.cnx}>
             <input type="text" className={styles.input} placeholder="عنوان البريد الإلكتروني"/>
            <input type="password" className={styles.input}  placeholder="كلمة السر"/>
            <button className={styles.btn}>دخول</button>
            <a className={styles.forgot} href="#">
            نسيت كلمة السر؟
            </a>
            <span className={styles.or}>or</span>
            <div className={styles.img1}>
              <div className={styles.footer}>
                <Link href="/" className={styles.google}>التسجيل عبر جوجل&ensp;  <i className="fab fa-google"></i></Link>
                <Link href="/"  className={styles.facebook}>التسجيل عبر فيسبوك&ensp;  <i className="fab fa-facebook"></i></Link>
              </div>
            
            </div>
          </div>
          </div>
        </div>
        <div className={styles.img}>
          <img className={styles.bg} src="/img/bg.svg" />
        </div>
    </div>
   </>
  );
}

export default Login;
