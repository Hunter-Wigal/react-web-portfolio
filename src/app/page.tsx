'use client';

import Image from 'next/image'
import styles from './page.module.css'

function next_image() {
  let car = document.getElementById("carousel");
  let img = document.getElementsByClassName(styles.car_image)[0];

  if(!car || !img)
  return;

  let imgWidth = img.clientWidth

  car.scrollLeft += imgWidth;
  
}

function prev_image(){
  let car = document.getElementById("carousel");
  let img = document.getElementsByClassName(styles.car_image)[0];

  if(!car || !img)
  return;

  let imgWidth = img.clientWidth

  car.scrollLeft -= imgWidth;
}

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.intro}>
          <h1 className="title">General Description Section</h1>
          <p>Hello and welcome to my website. My name is Hunter Wigal and I developed this website as a portfolio
            to display the various projects I have worked on/contributed to
          </p>
          <p>
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
        
        <div className={styles.car_container}>
          <div className={styles.carousel} id="carousel">
            <img className={styles.car_image} alt="project image" id="1"></img>
            <img className={styles.car_image} alt="project image2" id="2"></img>
            <img className={styles.car_image} alt="project image3" id="3"></img>
          </div>
          <button onClick={prev_image} className={styles.prev_btn + " " + styles.scroll_btn}>&#8249;</button>
          <button onClick={next_image} className={styles.next_btn + " " + styles.scroll_btn}>&#8250;</button>
        </div>
      </div>
    </div>
  )
}
