//here is where you make your API call 
// Look in openAI.js for an example

import dotenv from "dotenv"
import OpenAI from "openai";

dotenv.config()
const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

export default async function writeStory(userInput) {
    const response = await client.responses.create({
        model: "gpt-4.1",
        input: `Write me a short story in french about ${userInput}.`
    });
    console.log("your-openAI.js response:", response.output_text);
    return response.output_text
}