import styles from '@/styles/CarouselPage.module.css'
import Carousel from "@/components/carousel";
import Link from "next/link";

export default function CarouselPage() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link className={styles.link} href='/'>Home</Link>
                <Carousel />
            </div>
        </div>
    )
}