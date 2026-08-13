# ZecPath

ZecPath is a beginner-friendly React job listing application created as part of my React learning and development tasks.

## Project Description

The project demonstrates the basic concepts of React development, including reusable components, props, state management, event handling, API integration, useEffect, and project architecture. It also demonstrates basic Git and GitHub workflow practices using feature branches and pull requests.

## Features

- Home page with navigation
- Reusable Navbar and Footer
- Reusable Button and Card components
- Login form with validation
- Show and hide password
- Dynamic job listing
- Job cards with company, experience, and salary
- Search bar component
- Jobs fetched from a public API
- Loading state
- Error handling
- Retry option
- Automatic job data refresh
- Organized services and constants
- Environment variable configuration

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- Vite
- Git
- GitHub

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── JobCard.jsx
│   ├── JobList.jsx
│   ├── LoginForm.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
│
├── constants/
│   └── constants.js
│
├── data/
│   └── jobs.js
│
├── services/
│   └── jobService.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx