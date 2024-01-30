import styles from './page.module.css'

export default function About(props: {}){

    return(
    <div className="container"> 
        <h1 className="title">About Me</h1>
        <img className={styles.headshot} alt="Picture of me"/>
        <p className={styles.info}>Hi, I'm Hunter. I'm currently a student at WVU, graduating in May of 2024 with a Bachelor of Science in Computer Science. After graduating, I plan to pursue
        work in the field of software engineering / development. I'm very passionate about the field of Computer Science
        and would eventually like to have experience in most aspects. I currently have worked with web development, graphic design
        with OpenGL, operating systems, GUI's in python, and a little with ROS2 and databases.
        </p>
    </div>

    );
}