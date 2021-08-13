import React from "react"

import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <span className={styles.logo}>Micro-frontend in Next.js (TypeScript)</span>
      </div>
    </header>
  )
}

export default Header
