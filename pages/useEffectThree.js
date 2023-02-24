import Link from "next/link";
import styles from '@/styles/UseEffectThree.module.css'
import { useEffect, useState } from "react";

export default function UseEffectThree() {
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10);
    }, [number])

    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <Link className={styles.link} href='/'>Home</Link>
                <button className={styles.btn} onClick={() => setNumber(number + 1)}>Click Me</button>
                <div className={styles.title}>
                    useEffectThree
                </div>
                <div className={styles.number}>
                    {value}
                </div>
            </div>
        </div>
    )
}