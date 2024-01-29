
import Link from "next/link";



export default function Home() {
  return (
    <main className="w-full h-screen bg-green flex flex-col justify-center items-center pt-40">
      <h1 className="text-6xl text-dark-green  font-bold mb-12">Welcome to Todo App</h1>
      <Link href="/task">
        <button className="w-40 h-14 bg-dark-green text-3xl font-semibold text-white rounded-md">Start</button>
      </Link>
    </main>
  );
}
