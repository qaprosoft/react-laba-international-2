import Link from "next/link";

const Header = () => {
    return (<header>
        <div>
        <nav>
        <Link href='/'>Home</Link>
        <Link href='/ssr'>Ssr</Link>
        <Link href='/ssg'>Ssg</Link>
        </nav>
        </div>
    </header>)
};

export default Header;