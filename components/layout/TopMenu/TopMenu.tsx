import styles from './topMenu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const TopMenu: React.FC = () => {
  return (
    <div className={styles.top}>
      <div className={styles.logo} onClick={() => window.location.reload()}>
        <img className={styles.logoImg} alt="logo" src="/ice-logo.png" />
      </div>
      <div className={styles.socialLinks}>
        <div className={styles.line} />
        <a
          className={styles.socialIcon}
          href="https://github.com/icedevera"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className={styles.socialIcon}
          href="https://twitter.com/icedeveraa"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className={styles.socialIcon}
          href="https://www.linkedin.com/in/icedevera/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  )
}

export default TopMenu
