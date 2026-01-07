# Zerodha Clone (MERN Stack)

A full stack web application inspired by Zerodha. This project simulates the core experience of an online stock trading platform using the MERN stack. It focuses on learning authentication, dashboards, portfolio management, and simulated trading logic.  
This application is for educational purposes only.

---

## 🚀 Features

### User Features
- User Signup & Login using JWT authentication
- Secure session management
- Personal dashboard with holdings, orders, and positions
- Simulated buy and sell order system (dummy trading)
- Basic price display with dummy market data
- Portfolio summary and profit/loss calculation
  
---

## 🧰 Tech Stack

| Layer     | Technology                   |
|-----------|------------------------------|
| Frontend  | React, Axios, Bootstrap/Tailwind |
| Backend   | Node.js, Express.js, JWT, bcryptjs |
| Database  | MongoDB Atlas                |
| Tools     | Git, GitHub, Postman, VS Code |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/SHRIKANTAMBATKAR/Zerodha-Clone.git

cd Zerodha-Clone


### 2️⃣ Install Dependencies
Backend
cd backend

npm install
Frontend

cd ../frontend
npm install
🔐 Environment Variables
Create a .env file inside the backend folder:

.env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3002

 ### ▶️ Run the Project
Start Backend
cd backend
npm start

Start Frontend
cd frontend
npm start

 ### 🌐 Default Running Ports
Frontend: http://localhost:3000

Backend: http://localhost:3002

📌 API Endpoints

- Method	Endpoint	Description
- POST	/signup	Register new user
- POST	/login	Login and get JWT
- GET	/holdings	Get holdings
- GET	/positions	Positions data
- POST	/order	Create a new order

🧪 Dummy Data Examples
- RELIANCE, TCS, INFY, HDFC, ITC, ADANI

🛠️ Future Enhancements
- Real time price chart with WebSockets
- TradingView or Chart.js integration
- Funds & bank simulation
- Alerts and notifications
- Performance analytics
---
⚠️ Disclaimer

This project does not represent the real Zerodha platform and does not perform actual trading. It is for educational and learning use only.

👨‍💻 Author
Shrikant Ambatkar
MERN Stack Developer


