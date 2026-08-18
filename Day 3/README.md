# Zecpath - Job Listing Application

Zecpath is a beginner-friendly job listing application built during my React internship. It fetches real job data from a public API and displays it in a responsive, modern UI.

## Features
- Dynamic job listings fetched from a public API
- Loading and error states for better user experience
- Responsive design (Grid layout for desktop, vertical stack for mobile)
- Reusable UI components (Navbar, Hero, JobCard, Footer, etc.)
- Clean architecture separating API services from UI components

## Technologies Used
- JavaScript (ES6+)
- React (Functional Components & Hooks)
- Vite
- CSS
- Arbeitnow Job Board API

## Project Architecture
The project follows a clean separation of concerns:
- `src/components/`: Contains all reusable UI components.
- `src/services/`: Contains API fetching logic (`jobService.js`).
- `src/constants/`: Contains configurable values (`constants.js`).

## Running Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/umamaheswarip24/zecpath.git](https://github.com/umamaheswarip24/zecpath.git)