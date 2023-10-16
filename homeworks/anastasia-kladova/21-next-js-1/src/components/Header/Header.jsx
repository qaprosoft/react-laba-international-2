import styles from './Header.module.css'
import Link from "next/link";

const Header = () => {
    return (<header className="header">
        <div className={styles.header__container}>
        <nav className={`header__nav ${styles.nav}`}>
        <Link href='/' className={styles.nav__link}>Home</Link>
        <Link href='/ssr' className={styles.nav__link}>Ssr</Link>
        <Link href='/ssg' className={styles.nav__link}>Ssg</Link>
        </nav>
        </div>
    </header>)
};

export default Header;