import styles from './page.module.css'
import Card from "./cards"
import projectsList from './projects.json';


export default function Projects(props: {}) {
    let cardNum = 0;
    return (
        <div className="container">
            <h1 className="title">Projects</h1>
            <div className={styles.row}>
                {projectsList.map(function (project) {
                    return <Card key={project.name} project={project} cardNum={cardNum++}></Card>
                })}
            </div>
        </div>

    );
}