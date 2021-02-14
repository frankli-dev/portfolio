import styles from './layout.module.scss'
import SideBar from "./SideBar/SideBar"

const Layout: React.FC = ({ children }: { children: React.ReactNode }) => {
    return (  <>
        <div className={styles.layoutContainer}>
          <SideBar />
          <div className={styles.content}>{children}</div>
        </div>
      </>)
}

export default Layout