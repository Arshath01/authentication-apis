# API Documentation

## Introduction

This API is built using Node.js, Express, and MongoDB. It provides endpoints for user authentication, user registration, and user data retrieval. The authentication mechanism uses JSON Web Tokens (JWT) to secure routes.

## Routes

### 1. Login

- **URL**: `/login`
- **Method**: POST
- **Description**: Authenticates a user by verifying the provided credentials and generates a JWT token for authentication.
- **Request Body**:
  - `email`: User's email address
  - `password`: User's password
- **Response**: Returns a JWT token if authentication is successful.

### 2. Signup

- **URL**: `/signup`
- **Method**: POST
- **Description**: Registers a new user with the application.
- **Request Body**:
  - `name`: User's name
  - `email`: User's email address
  - `password`: User's password
- **Response**: Returns a success message upon successful registration.

### 3. Show User (Protected Route)

- **URL**: `/user`
- **Method**: GET
- **Description**: Retrieves details of a particular user using the JWT token provided in the request headers. This route is protected and requires a valid JWT token for access.
- **Request Headers**:
  - `Authorization`: <JWT Token>
- **Response**: Returns user details if authentication is successful.

### 4. Display All Users

- **URL**: `/users`
- **Method**: GET
- **Description**: Retrieves details of all users registered with the application.
- **Response**: Returns an array of user objects containing user details.

## Technologies Used

- Node.js
- Express
- MongoDB
- JSON Web Tokens (JWT)

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and configure the connection URL.
4. Run the server using `npm start`.

## Author

Arshath Ahamed A

