import Image from 'next/image'
import styles from './page.module.css'


export default function ResumePage(props: {}){

    // Put images in public folder
    return (<div>
        <h1 className={styles.header}>Resume</h1>
        
        <img className={styles.resume} src={"/resume.png"}
        alt="This is an image of my resume"/>


    </div>);
}