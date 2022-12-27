import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    const links = [
        {link: '', name: 'Discord'},
        {link: '', name: 'Facebook'},
        {link: '', name: 'Twitter'},
        {link: '', name: 'Instagram'},
        {link: '', name: 'YouTube'}
    ]
    return (
        <div className={styles.footer}>
            <div className={styles.bar} />
            <div className={styles.content}>
                <div className={styles.container}>
                    <span>© Acaunt Tertouos, horsaën</span>
                    <span>{`Made with <3 by `} <Link href="https://github.com/horsaen">horsaën</Link></span>
                </div>
                <div className={styles.container}>
                    {links.map(link => (
                        <Link href={link.link} key={link.name} className={styles.socLink}>{link.name}</Link>
                    ))}
                </div>
                <div className={styles.mail}>
                    <Link href='mailto:acauntalotaer@gmail.com'>acauntalotaer@gmail.com</Link>
                </div>
            </div>
        </div>
    )
}