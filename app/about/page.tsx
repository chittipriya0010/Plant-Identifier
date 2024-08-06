import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 animated-gradient">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-8">About Plant Identifier</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Plant Identifier is dedicated to helping nature enthusiasts, gardeners, and curious individuals discover and learn about the fascinating world of plants. Our cutting-edge AI technology allows you to identify plants instantly, providing you with valuable information about their care and characteristics.
          </p>
          <p className="text-gray-700">
            We believe that by fostering a deeper understanding of the plant kingdom, we can encourage environmental awareness and promote sustainable practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Upload a clear image of the plant you want to identify</li>
              <li>Our AI analyzes the image using advanced machine learning algorithms</li>
              <li>Receive detailed information about the plant, including its name and care instructions</li>
              <li>Explore and learn more about the identified plant and similar species</li>
            </ol>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fast and accurate plant identification</li>
              <li>Detailed care instructions for identified plants</li>
              <li>Information on plant characteristics and interesting facts</li>
              <li>User-friendly interface for easy navigation</li>
              <li>Continually updated database of plant species</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Meet the Developer</h2>
          <div className="flex items-center space-x-6">
            <Image
              src="/developer-avatar.png"
              alt="Developer"
              width={120}
              height={120}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-medium text-emerald-600 mb-2">Chittipriya Verma</h3>
              <p className="text-gray-700 mb-2">
                As the sole developer of Plant Identifier, I'm passionate about combining my love for technology with my interest in botany. With a background in AI and web development, I've created this tool to make plant identification accessible to everyone.
              </p>
              <p className="text-gray-700">
                I'm constantly working on improving the accuracy and expanding the features of Plant Identifier. Your feedback and suggestions are always welcome!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Start Identifying Plants
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}