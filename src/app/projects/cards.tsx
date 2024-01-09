import styles from './page.module.css'

// export default function Cards() {
//     return
// }




export default function Card(props: {name: string, description: string, repo_link: string, image: string}) {
    let styling = props.image === "nonexistent" ? styles.placeholderimg: styles.image;
    return (
        <div className={styles.card}>
            <h1>{props.name}</h1>
            <img src={props.image} className={styling} alt="A screenshot of the project" />
            <p>{props.description}</p>
            <a href={props.repo_link} target="_blank">Link to repository (currently not functioning)</a>
        </div>

    )
}