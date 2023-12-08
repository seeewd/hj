import '../styles/globals.css'
import Image from 'next/image'
import backgroundImg from '../images/testimg.png'
import styles from '../styles/Home.module.css'

export default function RootLayout() {
  return (
    <div className={styles.background}>
      <Image src={backgroundImg} alt="img" fill/>
      <div>
        <h1>hello</h1>
        <h2>hello</h2>
      </div>
    </div>
  )
}
