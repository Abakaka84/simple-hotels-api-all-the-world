const express = require("express");
const app = express();

app.use(express.json());

const hotels = [
  {
    id: 1,
    name: "Hilton New York",
    city: "New York",
    country: "USA",
    price_per_night: 180
  },
  {
    id: 2,
    name: "Marriott Paris",
    city: "Paris",
    country: "France",
    price_per_night: 220
  },
  {
    id: 3,
    name: "Hotel Berlin Central",
    city: "Berlin",
    country: "Germany",
    price_per_night: 150
  }
];

app.get("/", (req, res) => {
  res.send("Hotels API is running 🚀");
});

app.get("/hotels", (req, res) => {
  res.json(hotels);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
