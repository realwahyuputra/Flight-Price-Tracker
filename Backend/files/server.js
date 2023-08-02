const express = require("express");
const getFlightsResults = require("./scrapeFlightPrices");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = 5432;

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("/api/flights", async (req, res) => {
  const { origin, destination, startDate, endDate } = req.query;
  console.log(origin, destination, startDate, endDate);
  if (!origin || !destination || !startDate || !endDate) {
    return res.status(400).json({
      error:
        "Invalid parameters. Please provide origin, destination, startDate, and endDate.",
    });
  }

  try {
    const flightPrices = await getFlightsResults(
      origin,
      destination,
      startDate,
      endDate
    );
    res.json(flightPrices);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch flight data." });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
