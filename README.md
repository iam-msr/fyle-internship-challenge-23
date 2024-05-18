# GitHub Repositories Viewer

This is a single-page application (SPA) built with Angular that allows users to input a GitHub username and view the public repositories belonging to that user. The application uses the GitHub API to retrieve the user's repositories and display them in a list.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Angular CLI](https://angular.io/cli)

## Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/iam-msr/fyle-internship-challenge-23.git

2. Navigate to the project directory:

   ```bash
   cd fyle-internship-challenge-23
   ```
3. To install Angular CLI (if not already installed), run:
  ```bash
  npm install -g @angular/cli
  ```
4. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Run the application:

   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.


## Using the Application

1. Enter a GitHub username in the input field and click the "Search" button.
2. The user's repositories will be displayed in a list.

## Error Handling

- Error messages are logged to the console as well as displayed on screen for different scenarios:
  - When the API returns a 403 status code (API rate limit exceeded), an error message is logged and displayed: "API rate limit exceeded. Please try after some time."
  - When the API returns a 404 status code (user not found), an error message is logged and displayed: "User not found. Please enter a valid username."
  - For other error statuses, a generic error message is logged and displayed: "Error loading [data]. Please try again."

## Caching

- **Checking if data is in cache:** Before making an API call, it checks whether the API call is already made in the current session and is present in the cache. This helps avoid unnecessary API calls and improves performance.

- **Storing data in cache:** When data is fetched from the GitHub API, it is stored in the cache for future use. This cached data is associated with specific parameters such as the username, page number, and items per page, allowing for efficient retrieval later.

- **Retrieving data from cache:** If the requested data is found in the cache, it is retrieved and used instead of making a new API call. This retrieval process ensures that previously fetched data is reused.

## Running the Tests

To run the tests, run the following command

```bash
ng test
```
This command will open a browser window and run all the tests in your project. The results will be displayed in the terminal as well as in the browser.

## Unit Tests

### ApiService

- **Service Creation Test**: Ensures that the ApiService is successfully created.

- **User Information Retrieval Test**: Verifies that getUser retrieves user information from the GitHub API.

- **User Repositories Retrieval Test with Pagination**: Checks that getUserRepos retrieves user repositories with pagination from the GitHub API.

### AppComponent

- **Component Creation Test**: Verifies that the AppComponent is successfully created.

- **Title Test**: Checks that the app component has the expected title.

- **User Information Update Test**: Ensures that user information is updated correctly upon successful user search.

- **Repository Update Test**: Checks that repositories are updated correctly upon successful repository search.
