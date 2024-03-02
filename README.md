  <div align="center">
  <h1 align="center">Students Dashboard</h1>
  <h3>Codebase for the Students Dashboard</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat-square" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Redux-004E89?logo=Redux&style=flat-square" alt='Redux\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=flat-square" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express&style=flat-square" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Zoho CRM-004E89?logo=Zoho&style=flat-square" alt='Zoho CRM\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-AWS-004E89?logo=Amazon AWS&style=flat-square" alt='AWS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Chakra UI-004E89?logo=Chakra UI&style=flat-square" alt='Chakra UI\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React Router-004E89?logo=React Router&style=flat-square" alt='React Router"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#🔍-overview)
  - [🌟 Features](#🌟-features)
  - [📁 Repository Structure](#📁-repository-structure)
  - [💻 Code Summary](#💻-code-summary)
  - [🚀 Getting Started](#🚀-getting-started)
  - [🚀 Design](#)
  
  ---
  
  
  ## 🔍 Overview

This project appears to be a React application with a Redux store, utilizing the `src` and `Pages` directories for source code and page components, respectively. The `Components` directory contains various React components used throughout the application, including those related to user authentication, referral systems, and carousal display. The `Redux` directory contains the Redux store, actions, action types, and reducer. The `index.js` file is the entry point of the application, and the `package.json` file lists dependencies and scripts for building and running the application.

---

## 🌟 Features

The project features include:<br>

- React application with a Redux store
- `src` and `Pages` directories for source code and page components, respectively
- `Components` directory containing various React components used throughout the application
- `Redux` directory containing the Redux store, actions, action types, and reducer
- `index.js` file as the entry point of the application
- `package.json` file listing dependencies and scripts for building and running the application

---

## 📁 Repository Structure

```sh
├── .gitignore
├── package-lock.json
├── package.json
└── src
    ├── App.css
    ├── App.jsx
    ├── Components
    │   ├── Alerts
    │   │   ├── AboutToStart.jsx
    │   │   ├── CoinsUpdated.jsx
    │   │   ├── CreditsExhausted.jsx
    │   │   ├── LowCredits.jsx
    │   │   └── MeetingInProgress.jsx
    │   ├── CarousalMain.jsx
    │   ├── Header.jsx
    │   ├── Loading.jsx
    │   ├── Login.jsx
    │   ├── MoreActions.jsx
    │   ├── Pricing.jsx
    │   ├── PrivateRoute.jsx
    │   ├── ReferralComponent.jsx
    │   ├── ReferralSteps.jsx
    │   ├── Schedule.jsx
    │   └── UserSystemStatics.jsx
    ├── index.css
    ├── index.js
    ├── Pages
    │   ├── Dashboard.jsx
    │   ├── Error.jsx
    │   ├── Main.jsx
    │   ├── NoUserFound.jsx
    │   ├── Referrals.jsx
    │   ├── SessionNotFound.jsx
    │   └── Store.jsx
    └── Redux
        ├── action.js
        ├── actionTypes.js
        ├── reducer.js
        └── store.js

```

---

## 💻 Code Summary

<details><summary>\src</summary>

| File     | Summary                                                                                                                                                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App.jsx  | The code defines a React component that renders a <BrowserRouter> element with multiple <Route> elements, each mapping to a different page or component. The PrivateRoute component is used to restrict access to certain pages based on user authentication. |
| index.js | The code creates a React application using the Chakra UI library and Redux, rendering the App component within a Provider component that provides the store to its children.                                                                                  |

</details>

---

<details><summary>\src\Components\Alerts</summary>

| File                  | Summary                                                                                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AboutToStart.jsx      | The code defines a functional component called AboutToStart that renders an alert message with a title, description, and button to join a meeting.                                                                                                          |
| CoinsUpdated.jsx      | The code defines a component called CoinsUpdated, which displays an alert message with a success icon and a customized title and description. The alert is styled using Chakra UI components and its properties are set to display the updated coins value. |
| CreditsExhausted.jsx  | The code defines a component called CreditsExhausted that displays an alert message with a title, description, and button to add quiz balance.                                                                                                              |
| LowCredits.jsx        | The code defines a React component that displays an alert with a warning status and a message about low quiz balance, allowing the user to add more balance to their account.                                                                               |
| MeetingInProgress.jsx | The code defines a component called MeetingInProgress that displays an alert message with a title, description, and button to join a quiz.                                                                                                                  |

</details>

---

<details><summary>\src\Components</summary>

| File                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CarousalMain.jsx      | The code defines a React component that renders a carousel with different alerts based on the current state of the application.                                                                                                                                                                                                                                                                          |
| Header.jsx            | The code defines a React component called Header, which renders a header element with a logo image and two tags displaying user information.                                                                                                                                                                                                                                                             |
| Loading.jsx           | The code defines a React component that displays a loading animation with a message and a race track loader.                                                                                                                                                                                                                                                                                             |
| Login.jsx             | The code defines a React component called Login that renders an email input field and a submit button. When the submit button is clicked, it dispatches a Redux action called fetchUser with the current email value as an argument.                                                                                                                                                                     |
| MoreActions.jsx       | The code defines a functional component called MoreActions that renders a box with three buttons: an invite button, a redeem coins button (commented out), and a view report button. The buttons are styled with Chakra UI and have click handlers that redirect to different URLs or open a new tab with a specific URL.                                                                                |
| Pricing.jsx           | The code is a React component that renders a table of pricing plans and their corresponding details, including the amount, number of quizzes, and validity period. It also includes a button to add quiz balance to the user's account.                                                                                                                                                                  |
| PrivateRoute.jsx      | The PrivateRoute component in React Redux checks the current mode and redirects to the homepage if it's not user allowing only authenticated users to access the children components.                                                                                                                                                                                                                    |
| ReferralComponent.jsx | The code defines a React component that displays a referral box with a header, a message, and a button to view referral details. The component uses Chakra UI components and the `useSelector` hook from React Redux to retrieve user data from the state.                                                                                                                                               |
| ReferralSteps.jsx     | The code defines a functional component called ReferralSteps that renders a Chakra UI Stepper component with two steps, each containing a title, description, and an image indicating the step's status (success, inactive, or waiting). The component uses the useSteps hook to manage the active step index based on the quizAttempted prop.                                                           |
| Schedule.jsx          | The code defines a React component that displays a table of quiz schedules for a user, using Chakra UI components.                                                                                                                                                                                                                                                                                       |
| UserSystemStatics.jsx | The code imports the Box, Tag, and useSelector components from Chakra UI and React, respectively. It then defines a functional component called UserSystemStatics that returns a Box element with two Tag elements inside it. The first Tag element displays the number of quizzes taken by the user, while the second Tag element displays the user's age in years, months, or days based on their age. |

</details>

---

<details><summary>\src\Pages</summary>

| File                | Summary                                                                                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dashboard.jsx       | The code defines a React component named Dashboard, which renders a dashboard layout with various components such as a header, user system statistics, carousal, referral component, schedule, pricing, and more actions. The component uses Chakra UI for styling and Redux for state management. |
| Error.jsx           | The code defines a React component that displays an error message and a button to try again, with the primary function of handling errors in a React application.                                                                                                                                  |
| Main.jsx            | The code defines a React component called Main that renders a login form and handles user authentication using Redux.                                                                                                                                                                              |
| NoUserFound.jsx     | The code defines a React component that displays an error message when the user's email is not found in the database, with two buttons to try again or request their registered email.                                                                                                             |
| Referrals.jsx       | The code defines a functional component named Referrals that renders a list of referral cards, each containing a student's name, phone number, and progress towards completing a quiz.                                                                                                             |
| SessionNotFound.jsx | The code defines a React component that displays a message when there is no active class or session available, with a button to try again.                                                                                                                                                         |
| Store.jsx           | The code defines a functional component named Store that renders an iframe with a store URL from the Redux state. It also includes a loading indicator and a fallback message if the store URL is not available.                                                                                   |

</details>

---

<details><summary>\src\Redux</summary>

| File           | Summary                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action.js      | The code defines a set of action creators for a Redux store, including `getLoading`, `getError`, `setUser`, `setMode`, `setStore`, and `setAlert`. It also includes a `fetchUser` function that fetches user data from an API endpoint and dispatches actions to update the store with the received data. Additionally, it includes a `getStoreURL` function that fetches a URL for a Pointagram reward store. |
| actionTypes.js | The code defines a set of constants for a Redux store, including action types and state keys.                                                                                                                                                                                                                                                                                                                  |
| reducer.js     | The code defines a reducer function that handles actions related to fetching and updating user data, including loading, error, and mode.                                                                                                                                                                                                                                                                       |
| store.js       | The code creates a Redux store using the `createStore` function from the `redux` library, passing in the reducer function and applying the `thunk` middleware.                                                                                                                                                                                                                                                 |

</details>

---

## 💻 Design

<details> <summary>Dashboard</summary>

</details>

<details> <summary>Referral Details Page</summary>

</details>

---

## 🚀 Getting Started

To get started with this project, follow these steps:<br>

1. Install the dependencies by running `npm install` or `yarn install` in your terminal.
2. Start the development server by running `npm start` or `yarn start`. This will launch a development server at <http://localhost:3000/>.
3. Open your web browser and navigate to <http://localhost:3000/> to view the application.
4. You can now start making changes to the code and see the results in real-time as you save and reload the page.
5. When you're ready to build the application for production, run `npm run build` or `yarn build`. This will create a production-ready build of the application in the `build` directory.
6. To deploy the application to a hosting platform such as Netlify or Heroku, you can use the `npm run deploy` or `yarn deploy` command. This will create a new deployment of the application and update the live site with the latest changes.
