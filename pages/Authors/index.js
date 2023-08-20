import styles from '@/styles/Book.module.css';
import Filter from '../../Components/Authors/Tools/Filter';
import Books from '../../Components/Book/Books';
import Section from '../../Components/Book/Tools/Section';
import Header from '@/Components/Header';
 const Book=()=>{
  return (
   <>
   <Header></Header>
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
