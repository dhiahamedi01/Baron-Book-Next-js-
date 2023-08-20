import styles from '../../styles/Hero.module.css';
import Image from 'next/image'
 const Hero=()=>{
  return (
   <>
    <div className={styles.search}><br></br>
    <p>الفضول أحد الخصائص الدائمة والأكيدة للعقل النشيط.</p><br></br>
    <div className={styles.book}>&ensp;
				<input type="text" className={styles.input} placeholder="إبحث عن كتاب أو مؤلف"/>
          <button  className={styles.button}>search</button>
    </div>
  </div>
  <div className={styles.parag}>
      <hr className={styles.hr} />
        <p className={styles.p}>
          لا أحب الكتب لأنني زاهد في الحياة .. ولكنني أحب الكتب لأن حياة واحدة لا تكفيني..
          ومهما يأكل الانسان فإنه لن يأكل بأكثر من معدة واحدة، ومهما يلبس فإنه لن يلبس على غير جسد واحد،
          ومهما يتنقل في البلاد فإنه لن يستطيع أن يحل في مكانين. ولكنه بزاد الفكر والشعور والخيال يستطيع أن يجمع الحيوات في عمر واحد
          ، ويستطيع أن يضاعف فكره وشعوره وخياله كما يتضاعف الشعور بالحب المتبادل، وتتضاعف الصورة بين مرآتين.
        </p>
      <hr className={styles.hr} />
  </div><br></br>
   </>
  );
}

export default Hero;
