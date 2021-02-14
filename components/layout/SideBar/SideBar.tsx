import styles from './sideBar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodeBranch,
  faEnvelope,
  faIgloo,
  faLaptopCode,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import ActiveLink from '../../../utilities/ActiveLink'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const SideBar: React.FC = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logo} onClick={() => window.location.reload()}>
        <img className={styles.logoImg} alt="logo" src="/ice-logo.png" />
      </div>
      <div className={styles.siteLinks}>
        <ActiveLink href="/" exact={true} activeClassName={styles.activeIcon}>
          <a className={styles.icon}>
            <span className={styles.hoverLink}>Home</span>
            <FontAwesomeIcon icon={faIgloo} />
          </a>
        </ActiveLink>
        <ActiveLink
          href="/about"
          exact={false}
          activeClassName={styles.activeIcon}
        >
          <a className={styles.icon}>
            <span className={styles.hoverLink}>About</span>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </ActiveLink>
        <ActiveLink
          href="/skills"
          exact={false}
          activeClassName={styles.activeIcon}
        >
          <a className={styles.icon}>
            <span className={styles.hoverLink}>Skills</span>
            <FontAwesomeIcon icon={faLaptopCode} />
          </a>
        </ActiveLink>
        <ActiveLink
          href="/work"
          exact={false}
          activeClassName={styles.activeIcon}
        >
          <a className={styles.icon}>
            <span className={styles.hoverLink}>Projects</span>
            <FontAwesomeIcon icon={faCodeBranch} />
          </a>
        </ActiveLink>
        <ActiveLink
          href="/contact"
          exact={false}
          activeClassName={styles.activeIcon}
        >
          <a className={styles.icon}>
            <span className={styles.hoverLink}>Contact</span>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </ActiveLink>
      </div>
      <div className={styles.socialLinks}>
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

export default SideBar
