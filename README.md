# FITLOG 🏋️

FitLog is a modern workout library built with Next.js. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, and save workouts for later.

The project features a clean dark-themed interface designed to make workout information easy to browse, manage, and track.

## ✨ Features

* **Workout Library** — Browse all available workouts fetched from the API.
* **Workout Details** — View complete information about each exercise, including equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
* **Today's Plan** — Add workouts to a daily workout plan and keep track of planned exercises.
* **Save for Later** — Save workouts and access them later from the Saved section.
* **Live Counters** — See the current number of planned and saved workouts directly from the navigation bar.
* **Mark as Done** — Mark completed workouts and keep your daily plan organized.
* **Remove Workouts** — Easily remove workouts from your plan when they are no longer needed.
* **Workout Sorting** — Sort workouts by duration, calories, or rating.
* **Responsive Design** — Fully responsive interface for mobile, tablet, and desktop devices.
* **Toast Notifications** — Get instant feedback when adding, saving, completing, or removing workouts.
* **Loading State** — Displays a loading state while workout data is being fetched.
* **Custom 404 Page** — Provides a friendly page for invalid or unavailable routes.

## 🛠️ Technologies Used

* **Next.js** — React framework for building the application.
* **React** — Used for building reusable UI components.
* **TypeScript** — Provides type safety throughout the project.
* **Tailwind CSS** — Used for responsive and modern styling.
* **DaisyUI** — Provides additional UI components and utilities.
* **React Toastify** — Used for toast notifications.
* **React Context API** — Used for managing shared workout state.
* **REST API** — Used to fetch workout data dynamically.

## 📄 Pages

### Home

The home page includes the hero section and workout library. Users can browse all available workouts and sort them based on duration, calories, or rating.

### Workout Details

Each workout has a dedicated details page containing:

* Workout image
* Description
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions

Users can add the workout to **Today's Plan** or **Save for Later**.

### My Plan

The My Plan page allows users to manage their workouts through two sections:

* **Today's Plan**
* **Saved**

Users can view workout details, mark exercises as completed, and remove workouts from their plan.

## 🔗 API

Workout data is fetched from the FitLog API:

**FitLog API — All Workout Data**

https://api.abcz.workers.dev/api/fitlog

## 🎯 Project Goal

The main goal of FitLog was to practice building a complete Next.js application with real API data, dynamic routing, shared state management, responsive UI, and interactive workout features.

It was also an opportunity to improve my understanding of building reusable components and creating a clean user experience.

---

Made with ❤️ while learning and building with **Next.js**.
