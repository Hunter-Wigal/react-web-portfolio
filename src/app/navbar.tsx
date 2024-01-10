import Link from 'next/link'
import styles from './page.module.css'


export default function NavBar(props: {className: string}){
    return (
    <nav className={props.className}>
        <h1 className={styles.navTitle}></h1>

        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/projects">Projects</Link>
        <Link className="link" href="/about">About Me</Link>
        <Link className="link" href="/resume">Resume</Link>
        
    </nav>);
}

 