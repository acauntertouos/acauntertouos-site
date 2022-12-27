import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/exercises">Exercises</Link></li>
                <li><Link href="/more">More</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </div>
    )
}