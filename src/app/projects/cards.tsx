'use client';

import styles from './page.module.css'
import { Project } from './project';

// export default function Cards() {
//     return
// }

function expand(cardNum: number){
    let button = document.getElementById("button " +cardNum);
    let card = document.getElementById("button " + cardNum)?.parentElement;

    if(!button)
        return

    if(!card)
        return

    var maxHeight = card.scrollHeight + "px";
    if(button.innerHTML === "Expand"){        
        card.style.maxHeight = maxHeight;

        button.innerHTML = "Hide";
        return;
    }
    else if(button.innerHTML === "Hide")
        card.style.maxHeight = "500px";
        button.innerHTML = "Expand";
    }


function ExpandButton(props: {cardNum: number}){
    return(
        <button className={styles.expand_btn} id={"button "+ props.cardNum} onClick={() => expand(props.cardNum)}>Expand</button>
    )
}


export default function Card(props: {key: string, project: Project, cardNum: number}) {
    //TODO rewrite this or make embedded sites for other hosted sites
    // Either an image or an embedded site
    let display = props.project.image === "portfolio" ? 
        <iframe className={styles.frame} src="https://hunterwigal.com" allowFullScreen></iframe>
        : <img src={props.project.image} className={styles.image} alt="A screenshot of the project" />

    let title_style = props.project.link ? styles.card_title : styles.empty_link
    let title = props.project.link ? <a href={props.project.link} target="_blank">{props.project.name}</a> : props.project.name
    let github = props.project.github ? <p className={styles.github}>Github: <a href={props.project.github} target="_blank">{props.project.github}</a></p> : null;

    return (
        <div className={styles.card}>
            <h1 className={title_style}>{title}</h1>
            
            {display}
            {github}
            <ExpandButton cardNum={props.cardNum}></ExpandButton>
            <p className={styles.description}>{props.project.description}</p>
        </div>

    )
}