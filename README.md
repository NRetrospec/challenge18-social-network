# Social Network API

## Description
A social network API built using Express and MongoDB. This application allows users to manage thoughts and user profiles, providing a platform for social interaction.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd challenge18-social-network
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To start the server, run:
```bash
npm run dev
```
The server will be running on `http://localhost:3001`.

## API Endpoints
- **User Routes**:
  - `GET /api/users`: Retrieve all users
  - `GET /api/users/:id`: Retrieve a single user by ID
  - `POST /api/users`: Create a new user
  - `PUT /api/users/:id`: Update a user by ID
  - `DELETE /api/users/:id`: Delete a user by ID

- **Thought Routes**:
  - `GET /api/thoughts`: Retrieve all thoughts
  - `GET /api/thoughts/:id`: Retrieve a single thought by ID
  - `POST /api/thoughts`: Create a new thought
  - `PUT /api/thoughts/:id`: Update a thought by ID
  - `DELETE /api/thoughts/:id`: Delete a thought by ID

## License
This project is licensed under the MIT License.
