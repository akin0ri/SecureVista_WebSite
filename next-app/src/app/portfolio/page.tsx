'use client'

import { useState } from 'react'

export default function PortfolioPage() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  // 実績データ（実際のデータに置き換えてください）
  const portfolioItems = [
    { id: 1, client: '株式会社A', date: '2023-10-01', description: 'Webアプリケーションの脆弱性診断' },
    { id: 2, client: '株式会社B', date: '2023-09-15', description: 'ネットワークインフラの脆弱性診断' },
    { id: 3, client: '株式会社C', date: '2023-08-30', description: 'クラウド環境のセキュリティ評価' },
  ]

  if (!showPortfolio) {
    return (
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">実績一覧</h1>
        <p className="mb-4">現在、実績を表示する準備が整っていません。</p>
        <button
          onClick={() => setShowPortfolio(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          実績を表示する
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">実績一覧</h1>
      <div className="grid gap-4">
        {portfolioItems.map(item => (
          <div key={item.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{item.client}</h2>
            <p className="text-gray-600">{item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}