import styles from './page.module.css'

// export default function Cards() {
//     return
// }



export default function Card(props: {name: string}) {
    return (
        <div className={styles.card}>
            <h1>{props.name}</h1>
            <img src="nonexistent" alt="A screenshot of the project" />
            <p>project Description</p>
        </div>

    )
}