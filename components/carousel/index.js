import styles from './carousel.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Carousel() {
    const [img, setImg] = useState(0);

    const changeImage = (change) => {
        if(change == "backward") {
            setImg(img - 1);
            if(img == 0){
                setImg(5);
            }
            console.log(img);
        } else if (change == "forward") {
            setImg(img + 1);
            if (img == 5) {
                setImg(0);
            }
            console.log(img);
        }
    }

    return (
        <>
            <div className={styles.carousel} style={{
                backgroundImage: "url(/carousel-images/"+ img + ".jpg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: 8,
                width: 500,
                height:300
            }}>
                <div className={styles.arrows}>
                    <Image 
                        src={"/icons/leftArrow.png"}
                        width={80}
                        height={60}
                        onClick={() => changeImage("backward")}
                    />
                    <Image 
                        src={"/icons/rightArrow.png"}
                        width={80}
                        height={60}
                        onClick={() => changeImage("forward")}
                    />
                </div>
            </div>
        </>
    )
}