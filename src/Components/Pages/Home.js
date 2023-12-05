import styles from './Home.module.css'
import img03 from "../../03.png"
import img04 from "../../04.png"
import logo from "../../logos.png"
import CarouselComponent from "../Layout/CarouselComponent"

function HOME(){
   return <section class={styles.section}>
   
   
   
   <div  className={styles.list}>
      <div className={styles.circle}>
    <img src={img04} className={styles.img}/>
      </div>
      <div className={styles.circle}>
    <img src={img03} className={styles.img}/>
      </div>
   </div>
   <h2 className={styles.h2}>LumeView Tech</h2>
   <button className={styles.btn}>EM BREVE</button>
   
   <div className={styles.reta}/>
   <CarouselComponent/>
   
   

   
   </section> 
   
  
}
export default HOME