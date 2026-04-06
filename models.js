import dotenv from "dotenv";

dotenv.config();

async function listMyModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log("Here are the models you can access:\n");
    
    data.models.forEach(model => {
        console.log(`- ${model.name}`);
    });

  } catch (error) {
    console.error("Error fetching models:", error.message);
  }
}

listMyModels();