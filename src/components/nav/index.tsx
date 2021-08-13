import React from 'react'
import Link from 'next/link'

import styles from './nav.module.scss'

const Nav: React.FC = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.nav_item}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.nav_item}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles.nav_item}>Contact</a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
