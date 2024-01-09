import styles from './page.module.css'

// export default function Cards() {
//     return
// }




export default function Card(props: {name: string, description: string, repo_link: string}) {
    return (
        <div className={styles.card}>
            <h1>{props.name}</h1>
            <img src="nonexistent" alt="A screenshot of the project" />
            <div className={styles.placeholderimg}></div>
            <p>{props.description}</p>
            <a href={props.repo_link} target="_blank">Link to repository (currently not functioning)</a>
        </div>

    )
}