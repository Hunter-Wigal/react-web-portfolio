import styles from './page.module.css'

export default function About(props: {}) {
    let headshotHeight = 100;

    let height = headshotHeight + "px";
    return (
        <div className="container">
            <h1 className="title">About Me</h1>
            <div className={styles.row}>
                <div className={styles.col}>
                    <img className={styles.headshot} alt="Picture of me" src="pro_headshot.jpg" />
                </div>
                <div className={styles.col}>
                    <h2>Contact Info</h2>
                    <div className={styles.contact_info}>
                        <h3>Email:</h3> hgwigal@gmail.com
                        <h3>Phone:</h3> 304-210-3566
                        <h3>Github:</h3> <a href="https://github.com/Hunter-Wigal" target="_blank">https://github.com/Hunter-Wigal</a>
                    </div>
                </div>

            </div>
            <div className={styles.row}>
                <p className={styles.info}>Hi, I'm Hunter. I'm a recent graduate of WVU, as of May 2024 with a Bachelor of Science in Computer Science.
                    I'm pursuing work in the field of software engineering / development. I'm very passionate about the field of Computer Science
                    and would eventually like to have experience in most aspects. I currently have worked with web development, graphic design
                    with OpenGL, operating systems, and GUI's in python. Some honorable mentions include work on a PyQt GUI that communicates
                    with a rover via ROS and implementation of a database in Java utilizing hashes, I/O, and SQL style commands.
                    <br/>
                    <br/>
                    Outside of my profession I like to pursue my various hobbies such as 3-D printing, running, and learning new topics. I enjoy 3-D printing 
                    new things, either for amusement or to solve problems around the house. I run during the spring and summer, usually
                    to train for half-marathons. I also like to learn new programming languages / technology for topics such as game development. 

                    {/* Over the past couple years I've worked on multiple web applications, most of which are displayed in the projects
                    section. From those applications I've learned how to use different frameworks such as Angular, Bootstrap, and some React.
                    I've also learned how to write in Javscript/Typescript and CSS while working on these projects. */}
                </p>


            </div>
        </div>

    );
}