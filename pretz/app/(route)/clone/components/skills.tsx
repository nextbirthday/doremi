import React from 'react'
import styles from './skills.module.css'
const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.title}>Skills</h2> <p className={styles.description}>Skills & Attributes</p>
      <p>Lorem ipsum dolor sit amet consectetur - Increase Critical Damage by 14~26.6%.</p>
      <div className={styles.skills}>
        <section className={styles.skills__coding}>
          <h3 className={styles.skills__title}>Coding Skills</h3>
          <ul>
            <li className={styles.bar}>
              <div className={styles.bar__metadata}>
                <span>HTML</span>
                <span>97%</span>
              </div>
              <div className={styles.bar__background}>
                <div style={{ width: '97%' }} className={styles.bar__value} />
              </div>
            </li>
            <li className={styles.bar}>
              <div className={styles.bar__metadata}>
                <span>CSS</span>
                <span>30%</span>
              </div>
              <div className={styles.bar__background}>
                <div style={{ width: '30%' }} className={styles.bar__value} />
              </div>
            </li>
            <li className={styles.bar}>
              <div className={styles.bar__metadata}>
                <span>Javascript</span>
                <span>70%</span>
              </div>
              <div className={styles.bar__background}>
                <div style={{ width: '70%' }} className={styles.bar__value} />
              </div>
            </li>
            <li className={styles.bar}>
              <div className={styles.bar__metadata}>
                <span>Typescript</span>
                <span>66%</span>
              </div>
              <div className={styles.bar__background}>
                <div style={{ width: '66%' }} className={styles.bar__value} />
              </div>
            </li>
            <li className={styles.bar}>
              <div className={styles.bar__metadata}>
                <span>React</span>
                <span>80%</span>
              </div>
              <div className={styles.bar__background}>
                <div style={{ width: '80%' }} className={styles.bar__value} />
              </div>
            </li>
            <li className={styles.bar}>
              <div className={styles.bar__metadata}>
                <span>Nextjs</span>
                <span>40%</span>
              </div>
              <div className={styles.bar__background}>
                <div style={{ width: '40%' }} className={styles.bar__value} />
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.skills__tools}>
          <h3 className={styles.skills__title}>Tools</h3>
          <ul>
            <li className={styles.skills__title__li}>IntelliJ</li>
            <li className={styles.skills__title__li}>Web Storm</li>
            <li className={styles.skills__title__li}>Spring Boot</li>
            <li className={styles.skills__title__li}>DBeaver</li>
            <li className={styles.skills__title__li}>Visual Studio Code</li>
          </ul>
        </section>
        <section className={styles.skills__etc}>
          <h3 className={styles.skills__title}>ETC</h3>
          <ul>
            <li className={styles.skills__title__li}>Git</li>
            <li className={styles.skills__title__li}>Scrum Master</li>
            <li className={styles.skills__title__li}>Trinity</li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default Skills
