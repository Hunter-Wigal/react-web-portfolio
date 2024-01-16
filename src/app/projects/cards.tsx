'use client';

import styles from './page.module.css'

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

    if(button.innerHTML === "Expand"){
        card.className = card?.className + " " + styles.expanded;

        button.innerHTML = "Hide";
        return;
    }
    else if(button.innerHTML === "Hide"){
        card.className = styles.card;
        button.innerHTML = "Expand"
    }

    
}

function ExpandButton(props: {cardNum: number}){
    return(
        <button className={styles.expand_btn} id={"button "+ props.cardNum} onClick={() => expand(props.cardNum)}>Expand</button>
    )
}


export default function Card(props: {name: string, description: string, repo_link: string, image: string, cardNum: number}) {
    let styling = props.image === "nonexistent" ? styles.placeholderimg: styles.image;
    
    return (
        <div className={styles.card}>
            <h1>{props.name}</h1>
            <img src={props.image} className={styling} alt="A screenshot of the project" />
            <ExpandButton cardNum={props.cardNum}></ExpandButton>
            <p>{props.description}</p>
            <a href={props.repo_link} className={styles.repo_link} target="_blank">Link to repository (currently not functioning)</a>
        </div>

    )
}