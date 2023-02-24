import Link from "next/link";
import styles from '@/styles/UseEffectOne.module.css'
import { useState, useEffect } from "react";

export default function UseEffectOne (){
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    })

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link className={styles.link} href='/'>Home</Link>
                <div className={styles.title}>
                    useEffectOne
                </div>
                <div className={styles.number}>
                    {number}
                </div>
            </div>
        </div>
    )
}