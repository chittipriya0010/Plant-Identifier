'use client'

import { useState } from 'react'
import { identifyPlant } from '@/utils/gemini'

export default function ImageUpload() {
  const [image, setImage] = useState<File | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [plantInfo, setPlantInfo] = useState<Record<string, string> | null>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      setResult(null)
      setPlantInfo(null)
    }
  }

  const handleCameraCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      setResult(null)
      setPlantInfo(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!image) return

    setLoading(true)
    try {
      const identification = await identifyPlant(image)
      setResult(identification.description)
      setPlantInfo(identification.info)
    } catch (error) {
      console.error('Error identifying plant:', error)
      setResult('An error occurred while identifying the plant.')
    }
    setLoading(false)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
          </label>
        </div>

        {/* Camera Capture Input */}
        <div className="flex items-center justify-center w-full">
          <label htmlFor="camera-input" className="flex flex-col items-center justify-center w-full h-16 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <p className="text-sm text-gray-500">Or <span className="font-semibold">Capture Photo</span></p>
            <input id="camera-input" type="file" className="hidden" onChange={handleCameraCapture} accept="image/*" capture="environment" />
          </label>
        </div>

        {image && (
          <div className="mt-4">
            <img src={URL.createObjectURL(image)} alt="Uploaded plant" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
          disabled={!image || loading}
        >
          {loading ? 'Identifying...' : 'Identify Plant'}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Plant Information:</h2>
          <p className="whitespace-pre-wrap mb-6">{result}</p>
          {plantInfo && (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="border p-2 text-left">Attribute</th>
                  <th className="border p-2 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(plantInfo).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border p-2 font-medium">{key}</td>
                    <td className="border p-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}