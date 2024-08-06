"use client";
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)

export async function identifyPlant(image: File): Promise<{ description: string, info: any }> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const imagePart = {
      inlineData: {
        data: await fileToBase64(image),
        mimeType: image.type,
      },
    }

    const prompt = `Identify this plant and provide important information about it. 
    Return the response in the following JSON format:
    {
      "description": "A concise description of the plant, including its common name and scientific name",
      "info": {
        "Water needs": "...",
        "Sunlight requirements": "...",
        "Soil type": "...",
        "Growth rate": "...",
        "Mature size": "...",
        "Special features": "..."
      }
    }`

    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    const text = response.text()

    return JSON.parse(text)
  } catch (error) {
    console.error('Error in identifyPlant:', error)
    throw error
  }
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string
      const base64Data = result.split(',')[1]
      resolve(base64Data)
    }
    reader.onerror = (error) => reject(error)
  })
}