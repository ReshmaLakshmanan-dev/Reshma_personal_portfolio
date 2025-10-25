export default function Hero({ onClick }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center text-white bg-black/40">
      <h1 className="text-4xl font-bold mb-6">Hi, I'm Reshma Lakshmanan 👋</h1>
      <p className="text-lg mb-6">Welcome to my portfolio</p>
      <button
        id="btn"
        onClick={onClick}
        className="relative px-6 py-2 rounded-lg border-2 border-pink-400 text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-500"
      >
        Know Me
      </button>
    </div>
  );
}
