import ImageUpload from './components/ImageUpload'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaUpload, FaSearch, FaBook } from 'react-icons/fa'; // Importing icons from react-icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 animated-gradient">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Plant Identifier</h1>
        <p className="text-lg text-center mb-8 text-gray-700">Upload an image of a plant to identify it and get detailed information.</p>

        {/* How It Works Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="text-green-500 text-3xl mr-4">
              <FaUpload />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Upload</h3>
              <p>Take a photo or upload an image of the plant you want to identify.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="text-green-500 text-3xl mr-4">
              <FaSearch />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Analyze</h3>
              <p>Our AI technology analyzes the image to identify the plant species.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="text-green-500 text-3xl mr-4">
              <FaBook />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Learn</h3>
              <p>Get detailed information about the plant, including care instructions and interesting facts.</p>
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <ImageUpload />
      </main>
      <Footer />
    </div>
  )
}