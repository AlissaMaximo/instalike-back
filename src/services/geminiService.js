// Source: https://github.com/guilhermeonrails/5-Vb8nXmJ5Q7kZ/blob/main/src/services/geminiService.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateDescriptionWithGemini(imageBuffer) {
  const prompt = "Generate a description in english for the following image";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Alt-text unavailable.";
  } catch (error) {
    console.error(
      "Error when trying to obtain alt-text:",
      error.message,
      error
    );
    throw new Error("Erro when trying to obtain alt-text from Gemini.");
  }
}
