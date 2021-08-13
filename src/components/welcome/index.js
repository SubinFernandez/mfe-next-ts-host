import Image from 'next/image'

import styles from './welcome.module.scss'
import welcomePic from '../../../public/hello.gif'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <section className={styles.root}>
        <Image className={styles.hello_img} src={welcomePic} alt="" />
        <p>Hello, I&apos;m the <strong>host</strong> application</p>
        <p>I&apos;m from https://mfe-next-ts-host.vercel.app/</p>
      </section>
    </div>
  )
}

export default Welcome
