import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto mt-16">
      <div className="relative h-96 mb-8">
        <Image
          src="/topimg.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold text-center">
            低コストで高品質な脆弱性診断サービス
          </h1>
        </div>
      </div>

      <Link href="/service" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-4">サービス概要</h2>
        <p className="mb-4">
          当社の脆弱性診断サービスは、最新のセキュリティ技術を駆使して、
          お客様のシステムの脆弱性を徹底的に分析し、対策を提案します。
        </p>
        <span className="text-blue-500 hover:underline">詳細を見る →</span>
      </Link>

      <Link href="/news" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mt-3">
        <h2 className="text-2xl font-bold mb-4">最新ニュース</h2>
        <ul className="list-disc list-inside mb-4">
          <li>2023年10月: 新しい診断ツールを導入しました</li>
          <li>2023年9月: セキュリティカンファレンスで講演を行いました</li>
          <li>2023年8月: 100社目の診断を完了しました</li>
        </ul>
        <span className="text-blue-500 hover:underline">もっと見る →</span>
      </Link>
    </div>

  )
}