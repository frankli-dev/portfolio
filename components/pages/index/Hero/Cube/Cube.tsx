import styles from './cube.module.scss'

const Cube: React.FC = () => {
  return (
    <figure className={styles.cube}>
      <div className={styles.face + ' ' + styles.front}>
        <div className={styles.innerFace + ' ' + styles.colorOne}></div>
        <div className={styles.frontInner}></div>
      </div>
      <div className={styles.face + ' ' + styles.top}>
        <div className={styles.innerFace + ' ' + styles.colorTwo}></div>
        <div className={styles.topInner}></div>
      </div>
      <div className={styles.face + ' ' + styles.right}>
        <div className={styles.innerFace + ' ' + styles.colorTwo}></div>
        <div className={styles.rightInner}></div>
      </div>
      <div className={styles.face + ' ' + styles.left}>
        <div className={styles.innerFace + ' ' + styles.colorTwo}></div>
        <div className={styles.leftInner}></div>
      </div>
      <div className={styles.face + ' ' + styles.bottom}>
        <div className={styles.innerFace + ' ' + styles.colorTwo}></div>
        <div className={styles.bottomInner}></div>
      </div>
      <div className={styles.face + ' ' + styles.back}>
        <div className={styles.innerFace + ' ' + styles.colorTwo}></div>
        <div className={styles.backInner}></div>
      </div>
      <div className={styles.coverX}></div>
      <div className={styles.coverY}></div>
      <div className={styles.coverZ}></div>
    </figure>
  )
}

export default Cube
