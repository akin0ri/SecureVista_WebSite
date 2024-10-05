export default function NewsPage() {
    const newsItems = [
      {
        id: 1,
        date: '2023年10月1日',
        title: '新しい診断ツールを導入しました',
        content: '最新のAI技術を活用した脆弱性診断ツールを導入し、より高度で効率的な診断が可能になりました。'
      },
      {
        id: 2,
        date: '2023年9月15日',
        title: 'セキュリティカンファレンスで講演を行いました',
        content: '当社のセキュリティ専門家が、最新の脅威動向と対策についての講演を行い、好評を博しました。'
      },
      {
        id: 3,
        date: '2023年8月30日',
        title: '100社目の診断を完了しました',
        content: 'おかげさまで、創業以来100社目のお客様の脆弱性診断を無事完了いたしました。今後もサービスの品質向上に努めてまいります。'
      },
    ]
  
    return (
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-3xl font-bold mb-6">最新ニュース</h1>
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.date}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }