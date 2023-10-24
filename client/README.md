# CountryInfo

This web application is made with React,NodeJS, and Express. The frontend interface allows users to input a country as a string. Then in the backend server, this app runs Express to get the information for the country from https://restcountries.com/#endpoints-name and sends it back to the frontend for rendering.

## Table of Contents

- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **npm (Node Package Manager)**: npm usually comes with Node.js. You can check if it's installed by running `npm -v` in your terminal.

- **Internet Connection**: To fetch data from JSON files, ensure you have an active internet connection.
- **Express**: Used for server-side routing and handling.

> Note: While not listed as prerequisites, you may also need to install specific dependencies or libraries for your project. Please refer to the `package.json` file for a list of project-specific dependencies.

### Installation

- **Clone the Repository**: Start by cloning this repository to your local computer using Git. Open your terminal and run the following command:

  ```bash
  git clone https://github.com/anjieWei2/countryInfo.git
  ```

- **Navigate to the Project Directory**: Change your working directory to the project folder:
  ```bash
  cd countryInfo
  ```
- **Install Client Dependencies**: In this application, client and server are in separate folders. This step focuses on install the client dependencies. Change your working directory to the client foler and use npm to install the project's dependencies. This command will read the package.json file and install the necessary packages:
  ```bash
  cd client
  npm install
  ```
- **Start the Client**: After installing the client dependencies, start the client development server with the following command:
  ```bash
  npm run preview
  ```
- **Open a New Terminal Tab/Window**: To continue with server installation, open a new terminal tab or window. The original tab/window should remain open with the client running.
- **Install Server Dependencies**: In the new tab/window, navigate to the server folder and install dependencies:
  ```bash
  cd server
  npm install
  ```
- **Access the App**: Open your web browser and navigate to the appropriate URL to access the running app.

## Usage

Before you get started, make sure you've completed the installation steps outlined in the [Installation](#installation) section.

### Getting Started

1. Access the App:

   - Open your web browser and navigate to the app's URL.

2. Use the Input Box:

   - You'll see an input box on the app's homepage.
   - Enter the name of the country you want to search.
     > Note: The country name is case-sensitive

3. Get Relevant Information:

   - Click the "Submit" button after entering your input.
   - The app will retrieve and display relevant information based on your input.

4. Explore and Repeat:
   - You can explore the information presented and repeat the process by entering new queries in the input box.

### Example

**Sample Input:**

- Enter "France" into the input box.

**Result:**

- The app will fetch and display information about France, such as its capital, population, and currency.
