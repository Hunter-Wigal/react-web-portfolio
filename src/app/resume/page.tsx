import Image from 'next/image'
import styles from './page.module.css'


export default function ResumePage(props: {}) {

    // Put images in public folder
    return (<div className="body">
        <h1 className="title">Resume</h1>

        <img className={styles.resume} src={"https://portfolio-static-files.s3.us-east-2.amazonaws.com/Hunter-Wigal+Resume+Software.png"}
            alt="This is an image of my resume" />
        <div className={styles.download}>
            <p>You can download my resume here:</p>
            <a id="a" href="https://portfolio-static-files.s3.us-east-2.amazonaws.com/Hunter-Wigal+Resume+Software.pdf" download>Hunter-Wigal-Resume.pdf</a>
        </div>
    </div>);
}