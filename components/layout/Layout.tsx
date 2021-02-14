import styles from './layout.module.scss'
import NavBar from './NavBar/NavBar'
import TopMenu from './TopMenu/TopMenu'

const Layout: React.FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layoutContainer}>
        <TopMenu />
        <NavBar />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}

export default Layout
