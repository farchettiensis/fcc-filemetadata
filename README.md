# File Metadata Microservice

This project is my solution to the "File Metadata Microservice" challenge as part of freeCodeCamp's Back End Development and APIs certification.

## Description

This microservice is built using Node.js and Express, providing a simple API to analyze and retrieve metadata for uploaded files. It utilizes the multer middleware for handling file uploads and provides information such as the file name, type, and size.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repository.git`
2. Navigate to the project directory: `cd your-repository`
3. Install dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Visit [http://localhost:your-port](http://localhost:your-port) in your browser to access the file upload form.
3. Upload a file, and the server will respond with the file's metadata.

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- Multer: Middleware for handling `multipart/form-data`, used for file uploads.
- Dotenv: Zero-dependency module that loads environment variables from a .env file.

## Configuration

Ensure that you have a `.env` file in the project root with the following configuration:

```env
PORT=3000  # Replace with your desired port
```

## API Endpoint

- **POST /api/fileanalyse**: Endpoint for file analysis. Accepts file uploads using the `upfile` field. Responds with JSON containing file metadata.