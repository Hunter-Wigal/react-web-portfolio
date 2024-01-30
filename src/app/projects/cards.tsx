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


export default function Card(props: {name: string, description: string, link: string, image: string, cardNum: number}) {
    let styling = props.image === "nonexistent" ? styles.placeholderimg: styles.image;
    // Either an image or an embedded site
    let display = props.image === "portfolio" ? <iframe className={styles.frame} src="https://hunterwigal.com" allowFullScreen></iframe>: <img src={props.image} className={styling} alt="A screenshot of the project" />
    let title_style = props.link === "#" ? styles.empty_link : styles.card_title
    return (
        <div className={styles.card}>
            <h1 className={title_style}><a href={props.link} target="_blank">{props.name}</a></h1>
            
            {display}
            <ExpandButton cardNum={props.cardNum}></ExpandButton>
            <p>{props.description}</p>
            <a href={props.link} className={styles.repo_link} target="_blank">Link to repository (currently not functioning)</a>
        </div>

    )
}