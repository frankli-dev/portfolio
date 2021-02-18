import React from 'react'
import styles from './hero.module.scss'

import Cube from './Cube/Cube'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridBox}>
        <div className={styles.heroText}>
          <div className={styles.topTags}>
            <span className={styles.tag}>{'<html>'}</span>
            <span className={styles.tagBody}>{'<body>'}</span>
          </div>
          <div className={styles.bottomTags}>
            <span className={styles.tagBody}>{'</body>'}</span>
            <span className={styles.tag}>{'</html>'}</span>
          </div>

          <div className={styles.headingContainer}>
            <span className={styles.tag}>{'<h1>'}</span>
            <h1 className={styles.heading}>
              Hi,
              <span className={styles.headingSpan}>I'm Ice,</span>
              <span className={styles.headingSpan}>And Dev is in My Name.</span>
            </h1>
            <span className={styles.tag}>{'</h1>'}</span>
          </div>
          <h2 className={styles.subHeading}>
            Business Analyst & Full Stack Developer
          </h2>
          <Link href="/contact">
            <div className={styles.cta}>
              <a>Contact Me</a>
            </div>
          </Link>
        </div>

        <div className={styles.cube}>
          <span className={styles.figureTagOpen}>
            {'<figure class="ice-cube">'}
          </span>
          <Cube />
          <span className={styles.figureTagClose}>{'</figure>'}</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
