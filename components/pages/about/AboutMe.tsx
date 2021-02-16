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
          I am a graduate of Management Engineering with a minor in Information
          Technology from the Ateneo de Manila University, and I have always had
          a passion for business and technology. I have found that these
          combination of skills work hand in hand to help deliver the best
          results and exceed expectations.
          <p className={styles.description}>
            From analyzing business processes to developing web applications, I
            enjoy the work of improving & innovating processes that shape our
            world.
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
