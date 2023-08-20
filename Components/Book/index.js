import styles from '@/styles/Book.module.css';
import Filter from './Tools/Filter';
import Books from './Books';
import Section from './Tools/Section';
 const Book=()=>{
  return (
   <>
   <div className={styles.container}>
   <div className={styles.Book}>
      <Filter></Filter><br></br>
      <div className={styles.liste}>
      <Books></Books>
      <Books></Books>
      <Books></Books>
      <Books></Books>
      <Books></Books>
      <Books></Books>
      </div>
   </div>
   <Section></Section>
   </div>
   
   </>
  );
}

export default Book;
