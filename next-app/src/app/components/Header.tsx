import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">SecureVista</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">ホーム</Link></li>
          <li><Link href="/request" className="hover:text-gray-300">診断依頼</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">お問い合わせ</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-300">実績一覧</Link></li>
        </ul>
      </nav>
    </header>
  )
}