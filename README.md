# 📄 ResumeCraft  

A full-stack resume builder platform where users can **create, edit, version, and download resumes as PDFs**.  
Built with **MERN + Vite + Tailwind** for a modern, responsive experience.  

---

##  Features  

- 🔐 **Secure Authentication** (JWT, httpOnly cookies)  
- 📑 **Resume Builder**  
  - Personal details, contact details, education, experience, additional details, projects, certifications
- 🔄 **Version Tracking**  
  - Every save creates a new version (V1, V2, …)  
- 📥 **PDF Download**  
- 📊 **Dashboard**  
  - Manage multiple resumes  
  - Track progress of completion  
- 🗑️ **Delete Confirmation Modal**   
- 🌐 **Deployed Frontend + Backend**  

---

## 🛠️ Tech Stack  

**Frontend**  
- React (Vite)  
- Tailwind CSS  
- Axios
- Zustand

**Backend**  
- Node.js + Express  
- MongoDB (Mongoose)  
- JWT Authentication  
- CORS  

**Deployment**  
- Frontend → Vercel  
- Backend → Render   

---

## ⚙️ Setup Instructions 

### 1️. Clone the repo
```bash
git clone https://github.com/Ranajit305/ResumeCraft.git
cd ResumeCraft
```
2. Install dependencies:
# Client
- cd client
- npm install

# Server
- cd ../server
- npm install

3. Environment Variables:
# Client
- VITE_BACKEND_URL=your_url

# Backend
- PORT=your_port
- MONGO_DB_URI=your_mongodb_connection_string
- NODE_ENV=development
- CLIENT_URL=your_url
- JWT_SECRET=your_jwt_secret

4. Run in Development
# Run backend
- cd server
- npm run dev

# Run frontend
- cd ../client
- npm run dev

5. Build & Deploy
# Client
- npm run build

# Server
- npm start
