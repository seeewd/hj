import NavBar from '@/components/NavBar'
import '../styles/globals.css'
export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        이 텍스트는 화면 크기에 따라 크기가 변경됩니다.
      </div>
    </div>
  )
}
