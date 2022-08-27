import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  return (
    <div style={{ padding: '100px 0 0 150px' }}>
      <h3>Post #{router.query.id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/">
        <a>Back to blog</a>
      </Link>
    </div>
  )
}
