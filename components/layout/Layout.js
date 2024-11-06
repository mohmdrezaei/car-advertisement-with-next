import styles from "./Layout.module.css"

function Layout({children}) {
  return (
     <>
     <header className={styles.header}>
        <h2>NextCar</h2>
        <p>Choose and Buy your car</p>
     </header >
      <div className={styles.container}>{children}</div>
     <footer className={styles.footer}>mohammad rezaei | next car &copy; </footer>
     </>
  )
}

export default Layout