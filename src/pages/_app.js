import NavBar from '@/components/NavBar'
import Footer from '@/components/NavBar' // You might want to change this to the correct Footer component
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import '../styles/globals.css'

export default function BasePart({ Component, pageProps }) {
  return (
    <>
      <NavBar />
        <Component {...pageProps} />
      <style jsx>{`
        .content {
          padding-top: 60px; // Adjust this value based on the height of your NavBar
        }
      `}</style>
    </>
  )
}
