import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './carousel-img/jl.jpg'
import img2 from './carousel-img/flash.jpg'
import img3 from './carousel-img/gg.jpg'
import img4 from './carousel-img/jw.jpg'
import styles from "./Carousel.module.scss";

function CarouselBox() {
    return (
        <Carousel className={`${styles.carouselBox} carousel`}>
            <Carousel.Item className={styles.item}>
                <div className={styles.image}>

                    <img
                        src={img1}
                        alt="First slide"
                        width={'auto'}
                    />
                </div>
                <Carousel.Caption className={styles.caption - 1}>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.item}>
                <div className={styles.image}>

                    <img
                        src={img2}
                        alt="second slide"
                    />
                </div>
             
                <Carousel.Caption className={styles.caption - 2}>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.item}>
                <div className={styles.image}>

                    <img
                        src={img3}
                        alt="third slide"
                    />
                </div>

                <Carousel.Caption className={styles.caption - 3}>
                    <h3></h3>
                    <p>
                        
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.item}>
                <div className={styles.image}>

                    <img
                        src={img4}
                        alt="fourth slide"
                    />
                </div>

                <Carousel.Caption className={styles.caption - 4}>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBox