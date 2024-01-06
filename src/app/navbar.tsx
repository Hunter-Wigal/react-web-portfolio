import Link from 'next/link'


export default function NavBar(props: {className: string}){
    return (
    <nav className={props.className}>
        <h1 className="title">Navbar</h1>

        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/projects">Projects</Link>
        <Link className="link" href="/about">About Me</Link>
        <Link className="link" href="/resume">Resume</Link>
        
    </nav>);
}

 