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
          <h1 className="title">Overview</h1>
          <p>Hello and welcome to my website. My name is Hunter Wigal and I developed this project as a portfolio
            to display the various projects I have worked on or contributed to. I hope that it can provide a good representation
            of my skills and I appreciate the time you took to view it.
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

          <p className={styles.examples}>
            Some examples of projects I've worked on, displayed here in order, include <a href="https://sophiessweetswv.com/" target="_blank">SophiesSweets</a>
            , an MPX based simple operating system, and a website for keeping track of 
            things called <a href="https://memory-machine-ff911.web.app/" target="_blank">"Memory Machine"</a>
          </p>

 
        </div>
        
        <div className={styles.car_container}>
          <div className={styles.carousel} id="carousel">
          <img className={styles.car_image} alt="project image3" src="projects/sophies_sweets_display.png"></img>
            <img className={styles.car_image} alt="project image" src="/projects/the_rockets_display.gif"></img>
            <img className={styles.car_image} alt="project image2" src="/projects/memory_machine_display.png"></img>
            
          </div>
          <button onClick={prev_image} className={styles.prev_btn + " " + styles.scroll_btn}>&#8249;</button>
          <button onClick={next_image} className={styles.next_btn + " " + styles.scroll_btn}>&#8250;</button>
        </div>
      </div>
    </div>
  )
}
