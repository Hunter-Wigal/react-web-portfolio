import styles from './page.module.css'
import Card from "./cards"

const projectsList = [
    {
        name: "Sophie's Sweets",
        description: `Sophie's Sweets is a business website made for displaying baked goods
        and for providing customers a way to order. Sophie, a baker local to Parkersburg WV, needed a
        way to display all of her products in one place and a way to take orders that wasn't through direct
        messaging. This web application was created just for those purposes. The application is currently
        deployed through Google Firebase and uses the Google Cloud Firestore for storing order information
        from customers. It was built using the Angular framework and uses styling from Bootstrap. It also
        uses Firebase authentication in order to have an admin role that is able to view the currently stored orders.`,
        link: "https://sophiessweetswv.com",
        image: "/projects/sophies_sweets_display.png"
    },
    {
        name: "MPX Based Operating System",
        description: `This project was designed for a class assignment and followed a set of guidelines. 
        The assignment was to build a basic operating system,starting with very few built-in functions and features. The above
        image shows the interface, which is console based and accepts text based commands. 
        The goals were provided in the form of modules which provided the guidelines and some basic instructions. 
        The different modules involved console communication (input/output), process and pcb management, context/state management,
        interleaved process execution, and interrupt driven I/O. The majority of the code was written in C with a small amount of 
        Assembly.`,
        link: "#",
        image: "projects/the_rockets_display.gif"
    },
    {
        name: "Memory Machine",
        description: `The Web application I title "Memory Machine" is a project I created to keep track of various information,
        such as assignments/tasks, a schedule, and project information. I also used it to learn various concepts related to web development
        and for testing various HTML related code. The web application was created using the Angular framework and uses Bootstrap
        for most of the styling. It is deployed on Google Firebase and utilizes Firebase features such as Authentication and the 
        Cloud Firestore. This project is one that has proved to be extremely helpful, as I utilize it almost every day.
        `,
        link: "https://memory-machine-ff911.web.app/",
        image: "projects/memory_machine_display.png"
    },
    {
        name: "Logique-a-la-Crabe",
        description: `Logique-a-la-Crabe was created to complete goals for a class assignment. The main purpose of this web application was 
        as an introduction to software engineering and web development. The project was completed in a team with Discord and Github as the method
        of communication. The original idea of the application was to be a learning tool for digital logic. The application was supposed to have 
        an interactive, drag and dop canvas for putting together circuits. Due to time constraints, this feature was never finished, but the application
        also contains 'learning modules' that teach a different subject in logic design along with interactive quizzes. The application was created 
        using the Angular framework and was deployed on Google Firebase. It also uses Bootstrap for component styling.`,
        link: "https://logique-a-la-crabe.firebaseapp.com/",
        image: "/projects/logique-crab.png"
    },
    {
        name: "This Portfolio",
        description: `This portfolio is a project that I created to display a lot of my work. It was also meant as a way for me to get
        more experience with other frameworks and services. This is why it was created using React with Next.JS and deployed using
        AWS Amplify, using AWS Route 53 for the custom domain management. All of the styling was done using CSS with no external
        styling frameworks.`,
        link: "#",
        image: "portfolio"
    },
    {
        name: "PC Partpicker if possible",
        description: `This web application was created for a lab project and was mainly focused on practicing the use of Bootstrap. It is meant
        to be a replication of the appearance of the site pcpartpicker.com. It was also built using the Angular framework and deployed on
        Google Firebase.
        Simple site with the goal of getting used to HTML, Bootstrap, Angular components, and CSS`,
        link: "#"
    },
    {
        name: "Ron's Database?",
        description: `Database with queries and drivers and stuff: some extra text here`,
        link: "#"
    }

]


export default function Projects(props: {}) {
    let cardNum = 0;
    return (
        <div className="container">
            <h1 className="title">Projects</h1>
            <div className={styles.row}>
                {projectsList.map(function (project) {
                    let img = project.image ? project.image : "nonexistent";
                    return <Card key={project.name} name={project.name} description={project.description} link={project.link} image={img} cardNum={cardNum++}></Card>
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