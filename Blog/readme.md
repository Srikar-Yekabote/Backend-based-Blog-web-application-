# Blog Application

This is a Blog application built with Node.js, Express, MongoDB, and EJS. It supports user authentication, blog creation (with file uploads for cover images), and commenting functionality.

## File Structure

- **[Blog/index.js]:**  
  The main entry point that configures the MongoDB connection, middleware (including cookie-based authentication from [authentication.js]) and mounts the routes.

- **[Blog/routes/blog.js]:**  
  Defines the endpoints for creating, retrieving, and commenting on blog posts.  
  - Uses `multer` for handling file uploads (cover image).
  - Endpoints include:
    - `GET /blog/add-new`
    - `GET /blog/:id`
    - `POST /blog` (with file upload)
    - `POST /blog/comment/:blogId`

- **[Blog/routes/user.js]:**  
  Contains endpoints for user authentication (signup, signin, and logout).

- **[Blog/model/user.js]:**  
  Defines the Mongoose schema for users and includes a static method for validating passwords and generating tokens.

- **[Blog/model/commets.js]:**  
  Defines the Mongoose schema for blog comments.

- **[Blog/middleware/authentication.js]:**  
  Provides middleware to check for authentication using cookies.

## Installation

1. Install dependencies:

    ```sh
    npm install
    ```

2. Ensure you have MongoDB running on your local machine. The application connects to MongoDB at `mongodb://127.0.0.1:27017/blog` ([Blog/index.js]).

3. Run the application:

    ```sh
    npm start
    ```

## Endpoints

### Home
- **GET /**  
  Renders the home page with a list of blog posts ([Blog/index.js]).

### Blog Routes (mounted on `/blog`)
- **GET /blog/add-new**  
  Renders the form to add a new blog post.  
  ([Blog/routes/blog.js])

- **GET /blog/:id**  
  Retrieves a single blog post by ID, populates the author and comments, then renders the full blog view.  
  ([Blog/routes/blog.js])

- **POST /blog**  
  Creates a new blog post.  
  Accepts form data with fields `title` and `body` along with a file field called `coverImage`.  
  The image is handled by `multer` and saved to the `/public/uploads` directory.  
  ([Blog/routes/blog.js])

- **POST /blog/comment/:blogId**  
  Adds a comment to the specified blog post.  
  ([Blog/routes/blog.js])

### User Routes (mounted on `/user`)
- **GET /user/signin**  
  Renders the sign-in page.  
  ([Blog/routes/user.js])

- **POST /user/signin**  
  Processes a sign-in request, validates credentials, generates a token, and sets it as a cookie.  
  ([Blog/routes/user.js])

- **GET /user/signup**  
  Renders the signup page.  
  ([Blog/routes/user.js])

- **POST /user/signup**  
  Registers a new user.  
  ([Blog/routes/user.js])

- **GET /user/logout**  
  Logs the user out by clearing the authentication cookie and redirecting to home.  
  ([Blog/routes/user.js])

## Connection and Process Flow

1. **Database Connection:**  
   In [Blog/index.js], the application connects to MongoDB at: