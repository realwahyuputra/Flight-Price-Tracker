# Flight-Price-Tracker
<img width="500" alt="Screenshot 2023-08-02 at 11 09 50 PM" src="https://github.com/Arthraj/Flight-Price-Tracker/assets/64681770/ad271eab-261e-4260-aa4d-4bcfb41694f0">
<img width="500" alt="Screenshot 2023-08-02 at 11 09 59 PM" src="https://github.com/Arthraj/Flight-Price-Tracker/assets/64681770/ef569136-688b-4dff-967e-faaedafaedd5">



Flight Price Tracker is a web application that scrapes Google Flights to retrieve the prices of various flights between a specified source and destination. It then showcases this data using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides users with a list of all available flights and sorts them based on increasing price, helping travelers find the most affordable options for their journey.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction

In today's fast-paced world, finding affordable flight options for travel is crucial. Flight Price Tracker simplifies this process by scraping Google Flights to gather pricing data for flights between any two specified locations. With a user-friendly interface, the application presents a sorted list of available flights, enabling travelers to quickly identify the best deals for their journey.

## Features

- Scrapes Google Flights to obtain real-time flight pricing information.
- Allows users to enter their desired source and destination locations.
- Displays a sorted list of available flights based on increasing price.
- Provides additional details about each flight, such as airlines, departure times, and layovers.
- Utilizes the MERN stack, offering a robust and scalable web application.
- Offers a seamless user experience with a responsive and intuitive interface.

## Installation

To run Flight Price Tracker locally on your machine, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Arthraj/flight-price-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flight-price-tracker
   ```

3. Install the required dependencies for both the server and the client:

   ```bash
   cd server
   npm install

   cd ../client
   npm install
   ```

4. Configure environment variables:

   Rename the `.env.example` file in the `server` directory to `.env` and provide the necessary configuration, such as MongoDB connection URL.

5. Start the development server:

   ```bash
   cd ../server
   npm run start

   cd ../client
   npm run start
   ```

6. Access the application by visiting `http://localhost:3000` in your web browser.

## Usage

1. Open the Flight Price Tracker application in your web browser.

2. Enter the source and destination locations for which you want to find flight prices.

3. Click the "Search" button to initiate the search process.

4. The application will scrape Google Flights and retrieve the prices of available flights between the specified locations.

5. Once the data is fetched, a list of flights will be displayed, sorted based on increasing price.

6. Enjoy finding the most affordable flight options with Flight Price Tracker!

## Technologies Used

- Puppeteer: For web scraping Google Flights to obtain flight prices.
- MERN Stack:
  - MongoDB: For storing and managing flight data.
  - Express.js: For building the backend server and API.
  - React.js: For creating the frontend user interface.
  - Node.js: For running the server-side application.
- HTML, CSS, and JavaScript: For creating the overall web application.
- Bootstrap: For enhancing the user interface and responsiveness.

## Contributing

I welcome contributions to improve the functionality and features of Flight Price Tracker. If you find any issues or have suggestions for enhancements, please feel free to open an issue or submit a pull request.

1. Fork the repository on GitHub.
2. Create a new branch from the `main` branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your forked repository.
5. Submit a pull request to the `main` branch of the original repository, describing the changes you made.

---

Thank you for using Flight Price Tracker! If you encounter any issues or have any questions, please don't hesitate to reach out to us. Happy travels! 🛫✈️
