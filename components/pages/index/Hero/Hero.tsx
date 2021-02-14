import React from 'react'
import styles from './hero.module.scss'
import dynamic from 'next/dynamic'

const Hero: React.FC = () => {
  const Snowfall = dynamic(
    () => {
      return import('react-snowfall')
    },
    { ssr: false }
  )

  return (
    <div className={styles.container}>
      <Snowfall snowflakeCount={100} />
      <div className={styles.heroText}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>
            Hi,
            <span className={styles.headingSpan}>I'm Ice,</span>
            <span className={styles.headingSpan}>And Dev is in My Name.</span>
          </h1>
        </div>
      </div>
      <div className={styles.game}></div>
    </div>
  )
}

export default Hero
