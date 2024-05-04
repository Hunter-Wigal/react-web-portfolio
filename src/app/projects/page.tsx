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
        The assignment was to build a basic operating system, starting with very few standard functions and features. The above
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
        description: `The Web application I call "Memory Machine" is a project I created to keep track of various information,
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
        of communication. The team also practiced the agile development model in order to better organize production of the application
        . The original idea of the application was to be a learning tool for digital logic. The application was supposed to have 
        an interactive, drag and dop canvas for putting together circuits. Due to time constraints, this feature was never finished, but the application
        also contains 'learning modules' that teach a different subject in logic design along with interactive quizzes. The application was created 
        using the Angular framework and was deployed on Google Firebase. It also uses Bootstrap for component styling.`,
        link: "https://logique-a-la-crabe.firebaseapp.com/",
        image: "/projects/logique-crab.png"
    },
    {
        name: "This Portfolio",
        description: `This portfolio is a project that I created to display a lot of my work. I also used it as a chance to learn
        more development tools, which is why I created it using React instead of Angular. It utilizes Next.JS and is deployed using 
        AWS Amplify, using AWS Route 53 for the custom domain management. All of the styling was done using CSS with no external
        styling frameworks.`,
        link: "#",
        image: "portfolio"
    },
    {
        name: "Django Marketplace Application",
        description: `This project was created to fulfill a semester long class assignment for a database class. The concept behind the project 
        was to create an application that utilized a database in some way. As per the class requirements, we were assigned a team and the team
        decided on creating an application similar to Steam, where users could buy or rent digital games. The application was created using
        Django for both the frontend and backend and a MySQL database for storing information. The frontend is contained within one Django app,
        while the backend is split across multiple Django apps. The apps follow an api style where actions are performed by making a request to
        a backend url, which handles connecting to the database and returning a response. The application includes basic features such as registering
        an account and logging in, 'purchasing' games and viewing your inventory, and adding games to the database with a 'publisher' account.`,
        link: "https://github.com/Hunter-Wigal/CS440-Team-Delta",
        image: "/projects/game_marketplace.png"
    },
    {
        name: "PyOpenGL Application",
        description: `This OpenGL application was created for an assignment in a graphics class. The application is written
        in python and utilizes libraries such as pyopengl, pygame, and pyrr. Pygame serves as the interface and display, allowing
        the application to be fully interactable using a mouse and keyboard, PyOpenGL serves as the rendering mechanism and uses pyrr
        to make matrix calculations for the shaders. The models in the application were designed in blender and the textures were found
        online. The OpenGL portion of the project utilizes shaders to calculate the colors based on provided textures, and also allows
        for limited lighting effects. The assignment it completed was one to create a scene that included various objects, including a house,
        vegetation, a street, and a character that waves.`,
        link: "https://github.com/Hunter-Wigal/PyOpenGL-Assignment-Demo",
        image: "/projects/pyopengl_display.png"
    },


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