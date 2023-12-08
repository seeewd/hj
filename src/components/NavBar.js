import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? 'active' : 'deactive'}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === '/about' ? 'active' : 'deactive'}>
          About
        </a>
      </Link>
      <Link href="/test" legacyBehavior>
        <a className={router.pathname === '/test' ? 'active' : 'deactive'}>
          Test
        </a>
      </Link>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          height: 5vh;
          width: 100%;
          z-index: 1000;
          background-color: none;
          padding-left: 32px; 
          padding-right: 32px; 
          justify-content: space-between;
          align-items: center;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: white;
        }
        .deactive {
          color: gray;
        }
      `}</style>
    </nav>
  )
}
