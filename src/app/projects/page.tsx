import styles from './page.module.css'
import Card from "./cards"

const projectsList = [
    {
        name: "Sophie's Sweets",
        description: `A business website made for displaying bakes goods
        and for provided customers a way to order.`,
        repo_link: "#"
    },
    {
        name: "MPX Based Operating System(check)",
        description: `An operating system designed using a combination of assembly 
        and c code. Created in collaboration with a team, utilizing Github and Discord to communicate.`,
        repo_link: "#"
    },
    {
        name: "Logique-a-la-Crabe",
        description: `A web application created as a class project. The goal of the project 
        was to familiarize ourselves with Angular, Javascript, HTML, and Bootstrap. Also
        utilized Github and Discord to communicate. (more info)`,
        repo_link: "#"
    },
    {
        name: "This Portfolio?",
        description: `First experience using react, limited experience with AWS`,
        repo_link: "#"
    },
    {
        name: "PC Partpicker if possible",
        description: `Simple site with the goal of getting used to HTML, Bootstrap, Angular components, and CSS`,
        repo_link: "#"
    },
    {
        name: "Ron's Database?",
        description: `Database with queries and drivers and stuff`,
        repo_link: "#"
    }
]


export default function Projects(props: {}){
    return(
    <div className="body"> 
        <h1>Projects</h1>
        <p>Cards with project description, pictures, and links to repos</p>

        <div className={styles.container}>

            {projectsList.map(function(project){
                return <Card key={project.name} name={project.name} description={project.description} repo_link={project.repo_link}></Card>
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