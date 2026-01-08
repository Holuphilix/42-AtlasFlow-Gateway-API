# 🛰️ AtlasFlow Gateway API

The **Gateway API** is the **entry point of the AtlasFlow platform**, handling all incoming shipment requests and routing them to the appropriate microservices.  
It ensures smooth communication between clients, tracking, billing, and other platform services.

## 📂 Folder Structure

```

02-AtlasFlow-Gateway-API/
├── README.md             # This file
├── .github/
│   └── workflows/
│       └── ci.yml        # CI pipeline for automated tests and build
├── docs/
│   └── architecture.md   # Architecture details for this service
└── src/                  # Source code for Gateway API

````

## ⚙️ Setup & Run Locally

1. Clone the repo:
```bash
git clone https://github.com/Holuphilix/42-AtlasFlow-Gateway-API.git
cd 42-AtlasFlow-Gateway-API
````

2. Install dependencies (Node.js example):

```bash
npm install
```

3. Start the API:

```bash
npm start
```

4. Test endpoint:

```bash
curl http://localhost:3000/
# Should return: "Hello, AtlasFlow Gateway API!"
```

## 🛠️ Endpoints (Example)

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| POST   | `/shipments`     | Create a new shipment     |
| GET    | `/shipments/:id` | Get shipment status by ID |

> These are placeholders for now; you will implement full functionality in future steps.

## 🔧 CI/CD Workflow

* **Lint code**
* **Run tests**
* **Build Docker image** (optional)
* Automated on every **push** and **pull request**

## 📝 Notes

* Follow the **service template structure** for consistency
* Keep **architecture docs updated** in `docs/architecture.md`
* Use **branch protection** and **pull requests** when merging

## 👤 Author

Philip Oluwaseyi Oludolamu
GitHub: [https://github.com/Holuphilix](https://github.com/Holuphilix)
LinkedIn: [Your LinkedIn profile]

## **2️⃣ Minimal API Code (Node.js Example)**

Create `src/index.js`:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, AtlasFlow Gateway API!');
});

// Example endpoints
app.get('/shipments/:id', (req, res) => {
  const shipmentId = req.params.id;
  res.json({ shipmentId, status: "in-transit" });
});

app.post('/shipments', (req, res) => {
  res.json({ message: "Shipment created successfully" });
});

app.listen(PORT, () => console.log(`Gateway API running on port ${PORT}`));
````

## **3️⃣ Push to GitHub**

```bash
git add .
git commit -m "Setup Gateway API with template structure, README and minimal API"
git push origin main
```

* Verify **CI workflow** runs from `.github/workflows/ci.yml`

