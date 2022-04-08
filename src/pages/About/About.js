import styles from "./About.module.css";
import person1 from '../../assets/photo1.png';
import person2 from '../../assets/photo2.png';
import person3 from '../../assets/photo3.png';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.textBox}>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium sapiente, excepturi libero obcaecati aspernatur officia culpa mollitia cupiditate omnis animi esse reprehenderit nesciunt totam doloribus nulla perferendis dolorum vero harum, ipsa ex, quisquam voluptates? Repellendus dolores natus distinctio maxime inventore. Soluta quos quam velit voluptates laborum? Ex unde obcaecati saepe natus quaerat, nobis labore quis repudiandae soluta minima fugit dolor quidem corrupti dicta harum similique. Adipisci laboriosam, exercitationem dolor consectetur, repudiandae nisi magni suscipit dicta nulla autem porro ducimus alias excepturi odio accusantium placeat fugiat praesentium sed odit dolorum quisquam fuga nemo amet quaerat! Provident voluptate aliquid facilis odit.</p>
      </div>
    <div className={styles.cards} >
      <div className={styles.card}>
        <img className={styles.cardImage} src={person1}/>
        <div className={styles.cardBody}>
          <h3 className={styles.cardText}>Project Owner</h3>
          <p className={styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImage} src={person2}/>
        <div className={styles.cardBody}>
          <h3 className={styles.cardText}>Project Owner</h3>
          <p className={styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImage} src={person3}/>
        <div className={styles.cardBody}>
          <h3 className={styles.cardText}>Project Owner</h3>
          <p className={styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

