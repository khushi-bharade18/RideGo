# RideGo — Smart Ride Booking Frontend

A modern and responsive ride booking frontend application built using **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS**, and **Vite**.

RideGo provides a professional ride-booking experience with destination search, ride filtering, dynamic pricing, booking confirmation flow, local storage authentication, and responsive UI for all devices.

---
# Live Demo

🔗 Live Application: [https://your-live-link.vercel.app](https://ride-go-red.vercel.app/)

---

# Features

## Authentication

- Login form with:
  - Email
  - Username
- Redux authentication state management
- LocalStorage persistence
- Protected dashboard routes
- Auto-login after refresh
- Logout functionality

---

## Responsive UI

- Mobile Responsive
- Tablet Responsive
- Laptop/Desktop Responsive
- Modern Black + Yellow Theme
- Professional Card-Based Layout
- Premium UI Design

---

## Smart Destination Search

- Destination search form
- Live search suggestions
- Error handling
- Invalid location validation
- Empty input validation
- Indore city-based mock locations

Supported locations:

- Bhawarkua
- Palasia
- Vijay Nagar
- Rajwada
- MR 10
- Bengali Square
- Geeta Bhawan
- LIG Square

---

## Dynamic Ride Filtering

Rides are filtered based on:

- Distance
- Traffic conditions
- Destination

Ride Types:

- Bike
- Mini
- Sedan
- SUV

---

## Dynamic Price Calculation

Fare calculation based on:

- Distance
- Ride type
- Traffic multiplier

Example:

Price = Distance × Rate × Traffic Multiplier

---

## Booking Flow

- Select ride
- Navigate to booking confirmation page
- View:
  - Booking ID
  - Destination
  - Ride type
  - Estimated fare
  - Driver arrival time
- Confirm ride
- Toast notification after confirmation
- Automatic dashboard redirect

---

## Additional Features

- Recent search saved in localStorage
- Reusable component architecture
- Professional folder structure
- Route protection
- Toast notifications
- Modern animations and transitions

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- React Icons
- React Toastify

---

# Folder Structure

```bash
src
│
├── app
│   └── store.js
│
├── components
│   ├── AuthLayout.jsx
│   ├── HeroSection.jsx
│   ├── InputField.jsx
│   ├── Location.jsx
│   ├── Logo.jsx
│   ├── LoginCard.jsx
│   ├── Navbar.jsx
│   ├── RideCard.jsx
│   ├── RideSection.jsx
│   ├── SearchForm.jsx
│   ├── SubmitButton.jsx
│   ├── ThemeBadge.jsx
│   └── UserProfile.jsx
│
├── data
│   └── mockData.js
│
├── features
│   └── auth
│       └── authSlice.js
│
├── pages
│   ├── BookingConfirmation.jsx
│   ├── Dashboard.jsx
│   └── Login.jsx
│
├── utils
│   └── filterRides.js
│
├── App.jsx
├── main.jsx
└── index.css
