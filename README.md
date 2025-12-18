#  Equipment Tracker

A simple full-stack web application to manage and track equipment.  

---

##  Features

- View a list of equipment in a table
- Add new equipment
- Edit existing equipment
- Delete equipment
- Search equipment by name, type, or status
- Responsive UI (works on desktop & mobile)

---

##  Tech Stack

### Frontend
- React (React App)
- JavaScript (ES6)
- Plain CSS 

### Backend
- Node.js
- Express.js
- RESTful APIs

### Database
- SQLite (using `better-sqlite3`)
- File-based persistent storage

---

##  Project Structure  
EQUIPMENT_TRACKER/  
│  
├── backend/  
│ ├── server.js  
│ ├── db.js  
│ ├── equipment.db  
│ ├── routes/  
│ │ └── equipment.js  
│ └── package.json  
│  
├── frontend/  
│ ├── src/  
│ │ ├── components/  
│ │ │ ├── EquipmentForm.js  
│ │ │ └── EquipmentTable.js  
│ │ ├── App.js  
│ │ ├── App.css  
│ │ └── index.js  
│ └── package.json  
│  
└── README.md  


---

##  How to Run Locally

### 1️. Clone the repository
```bash
git clone <your-github-repo-url>
cd Equipment_tracker
```
### 2. Run Backend
```
cd backend
npm install
node server.js
```
Backend will start at:
```
http://localhost:5000
```
Test API:
```
http://localhost:5000/api/equipment
```
### 3. Run Frontend

Open a new terminal:
```
cd frontend
npm install
npm start
```

Frontend will run at:
```
http://localhost:3000
```
### Implementation Details  

-The frontend communicates with the backend using RESTful APIs.  
-Equipment data is stored persistently in a local SQLite database.  
-Search are implemented on the client side to keep backend logic simple.  
-The application is stateless and does not require authentication.  

## Conclusion  
### This project demonstrates:  
Full-stack development using React and Node.js  
REST API design using Express  
Persistent data storage using SQLite  
Clean and maintainable code structure  


