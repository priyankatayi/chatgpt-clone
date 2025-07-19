# 💬 SmartTalk AI (Full Stack Chatbot)

A full-stack ChatGPT-style AI chatbot with a **React frontend** and **Node.js/Express backend**, powered by the **OpenAI API**. This app mimics ChatGPT's behavior with streaming responses and a real-time UI.

---

## 🚀 Features

- Displays animated typing indicators for a more natural, real-time chat experience.

- Communicates securely with OpenAI's API via a Node.js proxy, hiding API keys from the client.

- Renders formatted responses using ReactMarkdown with support for code, links, and lists.

- Persists and restores chat history using a custom useLocalStorage React hook.

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
git clone https://github.com/priyankatayi/smarttalk-ai.git
cd smarttalk-ai
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
smarttalk-ai/
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
- Add dark/light theme toggle
- Make it responsive
- Support for image generation (DALL·E)

---

## 🙌 Acknowledgements

- [OpenAI API](https://platform.openai.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
