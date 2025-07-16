# 💬 SmartTalk AI (Full Stack)

A full-stack ChatGPT-style AI chatbot with a **React frontend** and **Node.js/Express backend**, powered by the **OpenAI API**. This app mimics ChatGPT's behavior with streaming responses and a real-time UI.

---

## 🚀 Features

- Real-time chat with typing animation
- React Markdown rendering
- OpenAI GPT API integration
- Secure backend proxy (for API key)

---

## 🛠️ Tech Stack

- **Frontend:** React, HTML5, CSS3
- **Backend:** Node.js, Express
- **API Integration:** OpenAI (gpt-4.1)
- **Markdown Rendering:** react-markdown
- **Hosting:** Vercel

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/priyankatayi/chatgpt-clone.git
cd chatgpt-clone
```

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 3. Create `.env` File

Create a `.env` file inside the server folder with the following contents:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Run the App Locally

#### Start Backend

```bash
cd server
npm run server
```

#### Start Frontend

```bash
cd client
npm start
```

Visit: `http://localhost:3000`

---

## 📁 Folder Structure

```
chatgpt-clone/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   ├── public/
│   └── ...
│
├── server/               # Express backend
│   ├── server.js
│   ├── configs/
│   │   └── openai.js
│   ├──.env
│   └── ...
│
├── .gitignore
├── README.md
```

---

## 📌 TODO / Future Enhancements

- Add user login (JWT)
- Store chat history in local storage or a database
- Add dark/light theme toggle
- Make it responsive
- Support for image generation (DALL·E)

---

## 🙌 Acknowledgements

- [OpenAI API](https://platform.openai.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
