import Caroucel1 from "../../Caroucel 1.jpg"
import Caroucel2 from "../../Caroucel 2.jpg"
import Caroucel3 from "../../Caroucel 3.png"
import Caroucel4 from "../../Caroucel 4.png"
import Caroucel5 from "../../Caroucel 5.png"
import Caroucel6 from "../../Caroucel 6.png"
import Caroucel7 from "../../Caroucel 7.jpg"
import Caroucel8 from "../../Caroucel 8.jpg"
import { Carousel } from 'react-responsive-carousel';
import styles from "./CaroucelComponent.module.css"
import './carousel.min.css';

const CarouselComponent = () => {
  return (
    <section className={styles.View}>
    <Carousel>
      <div className={styles.Caroucel}>
      <img src={Caroucel1} alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div className={styles.Caroucel}>
        <img src={Caroucel2} alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div className={styles.Caroucel}>
        <img src={Caroucel3} alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
      <div className={styles.Caroucel}>
        <img src={Caroucel4} alt="Image 3" />
        <p className="legend">Image 4</p>
      </div>
      <div className={styles.Caroucel}>
        <img src={Caroucel5} alt="Image 3" />
        <p className="legend">Image 4</p>
      </div>
      <div className={styles.Caroucel}>
        <img src={Caroucel6} alt="Image 3" />
        <p className="legend">Image 4</p>
      </div>
      <div className={styles.Caroucel}>
        <img src={Caroucel7} alt="Image 3" />
        <p className="legend">Image 4</p>
      </div>
      <div className={styles.Caroucel}>
        <img src={Caroucel8} alt="Image 3" />
        <p className="legend">Image 4</p>
      </div>
    </Carousel>
    <Carousel>

      
    </Carousel>
    </section>
  );
};

export default CarouselComponent;