import Image from 'next/image'
import styles from './page.module.css'


export default function ResumePage(props: {}) {

    // Put images in public folder
    return (<div className="body">
        <h1 className="title">Resume</h1>

        <img className={styles.resume} src={"/resume.png"}
            alt="This is an image of my resume" />
        <div className={styles.download}>
            <p>You can download my resume here:</p>
            <a id="a" href="/Hunter-Wigal Resume.pdf" download>Hunter-Wigal Resume.pdf</a>
        </div>
    </div>);
}