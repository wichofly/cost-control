# Cost Control Application

## Overview

The Cost Control Application is a React and TypeScript-based project designed to help users manage their expenses. It allows users to add, edit, and delete expenses, and provides a visual representation of their budget and remaining funds. This application performs CRUD (Create, Read, Update, Delete) operations on expenses.

## Features

- Add new expenses with details such as name, amount, category, and date.
- Edit existing expenses.
- Delete expenses.
- View total expenses and remaining budget.
- Swipeable list for easy expense management.
- Responsive design using Tailwind CSS.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Swipeable List**: A component for creating swipeable list items in React.
- **React Date Picker**: A customizable date picker component for React.
- **React Circular Progressbar**: A circular progress bar component for React.
- **UUID**: A library for generating unique identifiers.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/wichofly/cost-control.git
   ```

2. Navigate to the project directory:

   ```
   cd cost-control
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

## State Management

This project uses `React Context`, `Custom Hooks`, and `useReducer` for state management. This combination provides several benefits:

- **Context:** Allows for global state management, making it easy to share state across multiple components without the need for prop drilling.
- **Custom Hooks:** Encapsulate logic and state management, making the code more modular and reusable.
- **useReducer:** Provides a predictable way to manage complex state logic, similar to Redux but with less boilerplate.

By using `Context` and `useReducer` together, the application achieves a clean and efficient state management solution. Components can access and update the global state easily, reducing the need for passing props down multiple levels.

## Useful npm Packages

1. [React Swipeable List:](https://www.npmjs.com/package/react-swipeable-list)
   **Description:** This package provides a swipeable list component for React. It allows users to swipe left or right on list items to reveal actions such as edit or delete.
   **Usage:** Ideal for creating interactive lists where users can perform actions directly on list items through swipe gestures.

2. [React Date Picker:](https://www.npmjs.com/package/react-date-picker)
   **Description:** A simple and customizable date picker component for React. It allows users to select dates from a calendar interface. It is necessary to install [react-calender](https://github.com/wojtekmaj/react-calendar) npm as well.
   **Usage:** Useful for forms where users need to input dates, such as expense tracking or event planning applications.

3. [React Circular Progressbar:](https://www.npmjs.com/package/react-circular-progressbar)
   **Description:** A circular progress bar component for React. It visually represents progress in a circular format.
   **Usage:** Great for displaying progress or completion status, such as showing the percentage of budget used in an expense tracking application.

## Deploy in Vercel

[Cost Control]()