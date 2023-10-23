import Gallery from '@/components/Gallery/Gallery'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Link href="/ssg">SSG</Link>
      <Link href="/ssr">SSR</Link>
      <Gallery users={[]} />
    </>
  )
}
