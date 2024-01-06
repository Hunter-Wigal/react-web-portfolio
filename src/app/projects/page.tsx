import styles from './page.module.css'
import Card from "./cards"

export default function Projects(props: {}){

    let cards = ["MPX", "SS", "LalC", "other"];

    return(
    <div className="body"> 
        <h1>Projects</h1>
        <p>Cards with project description, pictures, and links to repos</p>

        <div className={styles.container}>

            {cards.map(function(name){
                return <Card name={name}></Card>
            })}
            

            {/* <div className={styles.card}>
                <h1>Project Name</h1>
                <img src="nonexistent" alt="A screenshot of the project"/>
                <p>Project Description</p>
            </div> */}

            
        </div>
    </div>

    );
}