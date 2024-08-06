// pages/contact.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 flex flex-col items-center justify-center text-center py-8 animated-gradient">
      <h1 className="text-4xl font-bold mb-4 text-green-800">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        If you have any questions or feedback, feel free to reach out to us on GitHub!
      </p>

      <Link href="https://github.com/chittipriya0010" target="_blank">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
          Visit our GitHub
        </button>
      </Link>
    </div>
  );
}