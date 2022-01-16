import styles from './aboutMe.module.scss'
import Timeline from './Timeline/Timeline'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <h2 className={styles.timelineHeading}>My Timeline</h2>
      <div className={styles.aboutMe}>
        <div className={styles.portrait}>
          <span className={styles.tagOpen}>{'<img class="handsome">'}</span>
          <a
            className={styles.instagramLink}
            href="https://www.instagram.com/icedeveraa/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.portraitIMG}
              alt="Ice de Vera"
              src="/images/icedevera.jpg"
            />
          </a>
          <span className={styles.tagClose}>{'</img>'}</span>
        </div>
        <span className={styles.tagOpen}>{'<p>'}</span>
        <p className={styles.description}>
          Hi! My name is Ice, and I have always had a strong passion for
          software engineering. Whether it be learning new technologies or
          shipping the highest quality solutions, it always sparks a fire in me
          whenever I am able to utilize technology to make the world a better
          place. I have experience in full-stack web and mobile development,
          from building my own startup to working on projects for clients.
          <p className={styles.description}>
            In my free time, besides programming, I enjoy playing video games,
            reading tech news, watching Formula 1, and
            spending time with family and friends.
          </p>
        </p>
        <span className={styles.tagClose}>{'</p>'}</span>
      </div>
      <div className={styles.timeline}>
        <span className={styles.tagOpen}>{'<div>'}</span>
        <Timeline />
        <span className={styles.tagClose}>{'</div>'}</span>
      </div>
    </div>
  )
}

export default About
