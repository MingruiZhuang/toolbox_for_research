// LaTeX转Word交互界面
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">科研小工具 - LaTeX公式转Word</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <textarea 
          className="w-full h-40 border border-gray-300 rounded-md p-4 mb-4 font-mono"
          placeholder="在此输入LaTeX公式，如：E = mc^2"
        />
        
        <button 
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          立即转换为Word格式
        </button>
      </div>
      
      <footer className="mt-12 text-center text-gray-500">
        <p>Powered by Next.js | 技术支持：你的名字</p>
      </footer>
    </div>
  )
}