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
