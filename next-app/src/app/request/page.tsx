'use client'

import { useState } from 'react'

export default function RequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serverIp: '',
    details: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Google Sheets API integration
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', serverIp: '', details: '' })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">脆弱性診断依頼</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">氏名</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="serverIp" className="block mb-2">診断対象サーバIPアドレス</label>
          <input
            type="text"
            id="serverIp"
            name="serverIp"
            value={formData.serverIp}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block mb-2">詳細情報</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          診断を依頼する
        </button>
      </form>
    </div>
  )
}