# 🤖 Gemini AI Chat Backend

A simple backend API built using Node.js and Express that integrates with Google's Gemini API to generate AI responses.

---

## 🚀 Features

* 🔑 Secure API key handling using environment variables
* ⚡ Fast AI responses using Gemini API
* 🧠 Simple chat endpoint
* 🧪 Tested using Postman

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Gemini API
* Postman

---

## 📂 Project Structure

gemini-practice/
│── index.js
│── .env
│── package.json
│── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/your-username/gemini-api-practice.git

### 2. Install dependencies

npm install

### 3. Add environment variables

Create a `.env` file:

GEMINI_API_KEY=your_api_key_here

### 4. Run the server

node index.js

---

## 📡 API Endpoint

### POST /chat

#### Request Body:

```json
{
  "message": "Explain blockchain simply"
}
```

#### Response:

```json
{
  "reply": "Blockchain is a digital ledger..."
}
```

---

## 🧪 Testing

Use Postman to test the API:

* Method: POST
* URL: http://localhost:5000/chat
* Body: JSON

---

## ⚠️ Important Notes

* Do NOT upload `.env` file
* Keep your API key secure
* Models may change (check official docs)

---

## 🚀 Future Improvements

* Add frontend (React)
* Add chat history (memory)
* Add streaming responses
* Deploy to cloud

---

## 👨‍💻 Author

Divyansh
