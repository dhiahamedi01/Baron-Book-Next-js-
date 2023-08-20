import styles from '../../styles/Login.module.css';
import Link from 'next/link';
const Login=()=>{
  return (
   <>
     <img className={styles.wave} src="/img/wave.png" />
     <div className={styles.container}>
        <div className={styles.loginContent}>
          <div className={styles.form2}>
            <div className={styles.header}>
            <h2 className={styles.title}>  <i className="fas fa-user-plus"></i>&ensp; إنشاء حساب جديد</h2>
            </div>
            <div className={styles.cnx}>
            <div className={styles.bloc1}>
                <div className={styles.groupe}>
                    <p className={styles.champ}> الإسم :</p>
                    <input type="text" className={styles.input2} placeholder="الإسم "/>
                </div>
                <div className={styles.groupe}>
                <p className={styles.champ}>اللقب:</p>
                <input type="text" className={styles.input2}  placeholder="اللقب"/>
                </div>
            </div>
            <div className={styles.groupe}>
                <p className={styles.champ}> البريد الإلكتروني :</p>
                <input type="text" className={styles.input1} placeholder="عنوان البريد الإلكتروني"/>
            </div>
            <div className={styles.groupe}>
                <p className={styles.champ}>  كلمة السر :</p>
                <input type="password" className={styles.input1} placeholder="كلمة السر"/>
            </div>
            <div className={styles.groupe}>
                <p className={styles.champ}>   إعادة  كلمة السر :</p>
                <input type="password" className={styles.input1} placeholder="إعادة  كلمة السر"/>
            </div>
            <button className={styles.btn1}>إنشاء حساب</button>
            
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
