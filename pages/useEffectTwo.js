import Link from "next/link";
import styles from '@/styles/UseEffectTwo.module.css'
import { useEffect, useState } from "react";

export default function UseEffectTwo () {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link className={styles.link} href='/'>Home</Link>
                <div className={styles.title}>
                    UseEffect Two
                </div>
                <div className={styles.number}>
                    {number}
                </div>
            </div>
        </div>
    )
}