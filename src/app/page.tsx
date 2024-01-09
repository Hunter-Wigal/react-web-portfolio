import Image from 'next/image'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className="main">
      <div className={styles.intro}>
        <h1>General Description Section</h1>
        <p>Basic info on the site</p>
        <p>Hi, I'm Hunter. I'm currently a student at WVU, graduating in May of 2024, and am
          pursuing a Bachelor of Science in Computer Science. I am looking to obtain work in the field of
          software engineering, specifically related to web development.
          This website contains relevant information
          such as:
        </p>
        <ul>
          <li>Projects I have worked on</li>
          <li>Skills / Experience</li>
          <li>Contact information</li>
          <li>And a copy of my resume</li>
        </ul>

        <p>
          Some examples of projects I've worked on include <a href="https://sophiessweetswv.com/" target="_blank">SophiesSweets</a>
          , <a href="https://logique-a-la-crabe.firebaseapp.com/" target="_blank">Logique-a-la-Crabe</a>
        </p>

        <p>This website was built using React with the Next.js framework and deployed using AWS Amplify.
        </p>
        <p>Possibly pictures</p>
        <ul>
          <li>Examples of work</li>
          <li>What I have experience with?</li>
        </ul>
      </div>
    </main>
  )
}
