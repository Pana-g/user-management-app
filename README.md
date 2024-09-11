
# User Management Application

## Objective

This Angular application allows users to browse a list of users and view their details.

## Features

1. **Home Page:**
   - Displays a list of users fetched from the [Random User API](https://randomuser.me/api/?results=10).
   - Each user card shows their name, email, thumbnail avatar, and other relevant information.

2. **User Details Page:**
   - Clicking on a user navigates to a details page that displays additional user details, including their name, email, phone number, and a full-size avatar.

3. **Search:**
   - A search bar on the home page allows filtering users by name or email.
   - The search input is debounced to prevent excessive API calls or filtering actions.
   - Displays a "No results" message if no users match the search criteria.

## Getting Started

Follow these instructions to get the application up and running on your local machine.

### Prerequisites

- Node.js v18 and npm v10 installed. You can download it from [nodejs.org](https://nodejs.org/).
- Angular CLI installed globally. You can install it using the following command:
  ```bash
  npm install -g @angular/cli
  ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pana-g/user-management-app.git
   cd user-management-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   ng serve
   ```
   The application will be running on `http://localhost:4200/`.

## Usage

- Visit the home page to view a list of users.
- Click on any user to navigate to their details page.
- Use the search bar to filter users by name or email.

## Technical Details

- The application is built with Angular 18.
- It uses Angular Router for navigation between the home page and the user details page.
- HTTP requests are managed using Angular's HttpClientModule.
- Search functionality is implemented with reactive forms, using RxJS operators like debounceTime for debouncing the input.

## API

- The application fetches user data from the [Random User API](https://randomuser.me/api/?results=10).

## Project Structure

```
└── 📁src
    └── 📁app
        └── 📁components
            └── 📁search-box
                └── search-box.component.css
                └── search-box.component.html
                └── search-box.component.ts
            └── 📁shimmer-card
                └── shimmer-card.component.css
                └── shimmer-card.component.html
                └── shimmer-card.component.ts
            └── 📁user-card
                └── user-card.component.css
                └── user-card.component.html
                └── user-card.component.ts
        └── 📁core
            └── 📁models
                └── user.ts
            └── 📁services
                └── api.service.ts
                └── data.service.ts
        └── 📁features
            └── 📁user-details
                └── user-details.component.css
                └── user-details.component.html
                └── user-details.component.ts
            └── 📁users
                └── users.component.css
                └── users.component.html
                └── users.component.ts
        └── app.component.css
        └── app.component.html
        └── app.component.ts
        └── app.config.ts
        └── app.routes.ts
    └── 📁assets
        └── favicon.ico
        └── logo.png
        └── no_users.png
    └── index.html
    └── main.ts
    └── styles.css
```

For any questions or suggestions, please contact [panageo94@gmail.com](mailto:panageo94@gmail.com).