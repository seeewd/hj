import '../styles/globals.css'
import Image from 'next/image'
import backgroundImg from '../images/testimg.png'
import classes from '../styles/Home.module.css'

export default function RootLayout() {
  return (
    <div>
      <h1>이미지 왜 안나와</h1>
      <div className={classes.img}>
        <Image src={backgroundImg} alt="img" layout="fill" />
      </div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  )
}
