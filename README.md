# RentWheels — Vehicle Rental Website

**Explore vehicles. Compare options. Find your next ride.**

RentWheels is a vehicle-rental website designed to make browsing different types of vehicles simple and convenient. Whether someone is looking for a bike for a short ride, a car for a trip, or a larger vehicle for group travel, RentWheels brings multiple vehicle categories together in one place.

🌐 **Live Website:** [wheel-rent.netlify.app](https://wheel-rent.netlify.app/)

💻 **Source Code:** [Diyan4444/RentWheels](https://github.com/Diyan4444/RentWheels)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Vehicle Categories](#vehicle-categories)
- [How to Use RentWheels](#how-to-use-rentwheels)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## About the Project

RentWheels is a web development project that brings the basic vehicle-rental browsing experience to a single website.

Instead of visiting different websites to explore different types of vehicles, users can browse a collection of vehicles, check their displayed details, compare daily rental prices, and add their preferred options to a cart.

The website includes individual pages for vehicle details, a page for browsing the available collection, and a dedicated cart page.

The main goal of the project is to provide a straightforward and visually engaging way to explore rental vehicles while demonstrating the fundamentals of building an interactive website.

## Features

- **Multiple Vehicle Categories:** Explore cars, bikes, scooters, buses, and trucks in one place.
- **Vehicle Listings:** Browse vehicles with images, names, displayed rental prices, seating capacity, and mileage information where provided.
- **Individual Vehicle Pages:** Open dedicated pages to view more information about selected vehicles.
- **Search Functionality:** Use the search interface to look for a vehicle by name.
- **Browse All:** Explore the vehicle collection from a dedicated browsing page.
- **Add to Cart:** Add vehicles to the cart while browsing.
- **Cart Page:** Access a separate page to review the items added to the cart.
- **Simple Navigation:** Move between the home page, browsing page, About page, and cart.
- **Visual Interface:** View vehicle images and organized listings designed to make browsing easier.

## Vehicle Categories

RentWheels brings together several types of vehicles to suit different travel needs.

| Category | Examples | Suitable For |
|---|---|---|
| Cars | Honda Civic, Toyota RAV4 Hybrid, Ford Mustang GT | Personal travel and road trips |
| Bikes | Royal Enfield Classic 350, KTM 390 Duke, BMW R 1250 GS | Rides and two-wheeler travel |
| Scooters | Vespa GTS 300 HPE, Yamaha TMAX, Honda ADV350 | Everyday travel and short rides |
| Buses | Volvo B8RLE, Mercedes-Benz Tourismo | Group transportation |
| Trucks | Different truck listings | Exploring larger vehicles |

*Vehicle names and categories reflect the project's listings. Displayed specifications and prices are examples shown by the website and should not be treated as verified real-world rental offers.*

## How to Use RentWheels

Using the website is straightforward, even for someone who has never used a vehicle-rental website before.

1. **Open the website:** Visit [RentWheels](https://wheel-rent.netlify.app/).
2. **Explore the categories:** Choose the type of vehicle you want to browse.
3. **Browse the listings:** Look through the available vehicle cards and their displayed information.
4. **View a vehicle:** Select the View option to open its individual details page.
5. **Search for a vehicle:** Enter a vehicle name in the search field and use the search button.
6. **Add a vehicle to the cart:** Use the Add to Cart option on a vehicle listing.
7. **Review your cart:** Open the Cart page to access the items you have added.

These steps describe the website's browsing and cart interface. They do not imply that a real-world rental reservation or payment has been completed.

## Technologies Used

RentWheels is built using core web technologies.

| Technology | What It Does in This Project |
|---|---|
| **HTML5** | Defines the structure and content of the website's pages. |
| **CSS3** | Controls the layout, styling, spacing, and appearance of the website. |
| **JavaScript** | Adds interactive behaviour, such as search and cart-related functionality. |
| **Netlify** | Hosts the live website so visitors can access it through a browser. |
| **Git and GitHub** | Help track code changes and store the project's source code online. |

### Why These Technologies?

HTML, CSS, and JavaScript provide the foundation for building websites without requiring a large framework.

- HTML organizes the content.
- CSS makes the content visually appealing.
- JavaScript allows users to interact with the website.

Together, these technologies make it possible to build a functional front-end project using relatively simple tools.

## Project Structure

The repository contains the website's HTML pages, shared styling and JavaScript files, along with images used for vehicle listings.

```text
RentWheels/
│
├── index.html              # Home page
├── browse.html             # Browse vehicle listings
├── about.html              # About page
├── cart.html               # Cart page
│
├── project.css             # Shared website styling
├── project.js              # Interactive functionality
├── Logo.png                # Website logo
├── bg.png                  # Background image
│
├── Honda Civic/            # Vehicle images
├── Toyota/                 # Vehicle images
├── GS/                     # Vehicle images
├── ADV/                    # Vehicle images
├── Vespa/                  # Vehicle images
├── Yamaha/                 # Vehicle images
├── Volvo/                  # Vehicle images
├── KTM/                    # Vehicle images
├── ford/                   # Vehicle images
├── merce/                  # Vehicle images
├── thomas/                 # Vehicle images
│
├── royal_enfield.html      # Example vehicle details page
├── honda_civic.html        # Example vehicle details page
├── toyota_rav4.html        # Example vehicle details page
├── ktm_390.html            # Example vehicle details page
├── vespa_gts.html          # Example vehicle details page
│
└── README.md               # Project documentation
```

*This is a simplified view of the repository. Additional vehicle pages and image folders are included in the project.*

### Understanding the Main Files

- **`index.html`** — The main entry point visitors see when they open the website.
- **`browse.html`** — Displays the vehicle collection for browsing.
- **`about.html`** — Provides information about the project.
- **`cart.html`** — Provides the cart interface.
- **`project.css`** — Contains styling shared across the website.
- **`project.js`** — Contains JavaScript used for interactive features.
- **Vehicle HTML files** — Provide dedicated pages for individual vehicles.
- **Image folders** — Store the pictures displayed alongside vehicle information.

## Getting Started

You do not need to install a complicated development environment to run this project locally.

### Prerequisites

You will need:

- A computer running Windows, macOS, or Linux.
- A modern web browser, such as Google Chrome, Microsoft Edge, or Firefox.
- Git, if you want to download the project using Git.
- A code editor, such as Visual Studio Code, if you want to explore or modify the source code.

### 1. Clone the Repository

Open a terminal or command prompt and run:

```bash
git clone https://github.com/Diyan4444/RentWheels.git
```

This downloads a copy of the project's source code to your computer.

### 2. Open the Project Folder

```bash
cd RentWheels
```

This moves your terminal into the downloaded project directory.

### 3. Open the Project in a Code Editor

If you have Visual Studio Code installed, you can run:

```bash
code .
```

Alternatively, open Visual Studio Code manually and select the downloaded `RentWheels` folder.

## Running the Project

Because RentWheels uses HTML, CSS, and JavaScript, you can run its pages without installing a framework or package manager.

### Option 1: Open the HTML File Directly

1. Open the downloaded project folder.
2. Locate `index.html`.
3. Double-click the file to open it in your browser.
4. Browse the website and try its available interactions.

### Option 2: Use Visual Studio Code

For a more convenient development experience:

1. Open the project in Visual Studio Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The website will open in your browser through a local development server.

If you make changes to the HTML, CSS, or JavaScript files, you can refresh the page to see the updates.

## What I Learned

Building RentWheels provided practical experience with the fundamentals of front-end web development.

Some of the key learning areas include:

- **Building multi-page websites:** Organizing a website into separate pages for different purposes.
- **Working with HTML and CSS:** Structuring content and designing vehicle listings.
- **Adding JavaScript interactions:** Making website elements respond to user actions.
- **Managing images and assets:** Organizing and displaying images across different vehicle pages.
- **Creating navigation:** Connecting pages so users can move around the website.
- **Working with GitHub:** Maintaining source code in a repository.
- **Deploying a website:** Making a locally developed project accessible online through Netlify.

The project also provided an opportunity to understand how separate website components work together to create a complete browsing experience.

## Future Improvements

The following features could extend RentWheels beyond its current browsing experience:

- **Vehicle Filters:** Allow users to narrow down listings by category, price, or other vehicle specifications.
- **Rental Date Selection:** Let users choose pickup and return dates.
- **Availability Checking:** Show whether a vehicle is available for the selected dates.
- **Booking Management:** Allow users to submit, review, and manage rental requests.
- **User Accounts:** Let users create accounts and access their own rental information.
- **Backend and Database Integration:** Store vehicle listings, availability, users, and bookings in a database.
- **Online Payments:** Integrate a secure payment provider if the project is extended to support real transactions.
- **Responsive Improvements:** Refine the layout for mobile phones, tablets, and desktop screens.
- **Improved Search and Sorting:** Make it easier to find vehicles by name, category, and price.

These are possible future enhancements, not claims about features that are already implemented.

## Contributing

Contributions and suggestions are welcome.

If you would like to improve RentWheels:

1. Fork the repository on GitHub.
2. Clone your fork to your computer.
3. Create a new branch for your changes.
4. Make and test your improvements.
5. Commit and push your changes.
6. Open a pull request describing what you changed and why.

For small changes, such as fixing a typo or improving the documentation, please keep the proposed changes focused and easy to review.

## Author

**Diyan Shah**

- **GitHub:** [@Diyan4444](https://github.com/Diyan4444)
- **Project Repository:** [RentWheels](https://github.com/Diyan4444/RentWheels)
- **Live Website:** [RentWheels](https://wheel-rent.netlify.app/)

## License

No license has been specified in this README. Before reusing, modifying, or distributing the project's source code, take MY PERMISSION. Email: diyanshah2301@gmail.com

---

<p align="center">
  Built with HTML, CSS, and JavaScript by Diyan Shah. 
</p>
