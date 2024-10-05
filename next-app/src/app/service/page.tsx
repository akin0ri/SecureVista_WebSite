export default function ServicePage() {
    return (
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-3xl font-bold mb-6">サービス概要</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">脆弱性診断サービス</h2>
          <p className="mb-4">
            当社の脆弱性診断サービスは、お客様のシステムやネットワークの安全性を包括的に評価し、
            潜在的な脆弱性を特定します。最新のセキュリティ技術と経験豊富な専門家チームにより、
            高品質な診断結果と実用的な改善提案を提供します。
          </p>
          <h3 className="text-xl font-semibold mb-2">サービスの特徴</h3>
          <ul className="list-disc list-inside mb-4">
            <li>最新のセキュリティツールと手動テストの組み合わせによる包括的な診断</li>
            <li>業界標準に基づいた体系的なアプローチ</li>
            <li>詳細な報告書と具体的な改善提案の提供</li>
            <li>お客様のビジネスニーズに合わせたカスタマイズ可能な診断範囲</li>
            <li>診断後のフォローアップサポート</li>
          </ul>
          <p>
            お客様のシステムのセキュリティ向上にお役立てください。詳細については、
            お問い合わせページからご連絡ください。
          </p>
        </div>
      </div>
    )
  }