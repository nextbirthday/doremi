import React from 'react'
import styles from './career.module.css'
const Career = () => {
  return (
    <section id="career" className={styles.section}>
      <div style={{ maxWidth: '1300px' }}>
        <h2 className={styles.title}>Career</h2>
        <p className={styles.description}>Projects</p>
        <ul className={styles.categories}>
          <li>
            <button className={`${styles.category} ${styles.category__selected}`}>All</button>
          </li>
          <li>
            <button className={styles.category}>Front-End</button>
          </li>
          <li>
            <button className={styles.category}>Back-End</button>
          </li>
          <li>
            <button className={styles.category}>Mobile</button>
          </li>
        </ul>

        <ul className={styles.projects}>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project1.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Front-End</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project2.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Front-End</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project3.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Front-End</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project4.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Mobile</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project5.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Front-End</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project6.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Mobile</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project7.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Mobile</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
          <li className={styles.project} data-type="front-end">
            <a href="#" target="_blank">
              <img src="images/projects/project8.webp" alt="project1" className={styles.project__image} />
              <div className={styles.project__metadata}>
                <h3 className={styles.project__title}>Back-End</h3>
                <p className={styles.project__description}>Clone coding with HTML, CSS, Javsscript</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Career
