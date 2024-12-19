# BookShop - API Documentation

Welcome to the Book Shop API repository! This project demonstrates an Express application built with TypeScript and integrated with MongoDB using Mongoose to manage books and orders in a book store.

## Table of Contents 

- [Installation](#installation)

- [Features](#features)

- [TechStack](#techstack)

- [EndPoints](#endpoints)

- [Deployment](#deployment)

## Installation

Follow these steps to set up the project locally:

1. Clone the Repository:

```
git clone https://github.com/SwapnilKhandoker101/bookstore.git

```

2. Install Dependencies:
```
npm install

```

3. Set up Environment Variables:
  
   - Create a .env file in the root directory

   - Add the following variables:

    ```
   PORT=5000
   DATABASEURL="Your MongoDb Url for connection to database "
    ```

4. Run the Application: 

```
npm run start:prod

```

5. The API will available at http://localhost:5000


## Features:

1. CRUD operations for Books:

   - Create book

   - Get all book from database

   - Get a specific book using Id from database

   - Update a specific book using id

   - Delete a specific book using id


2. Order Management:

     - Create Order for books

     - Adjust stock and quantity dynamically based on orders

3. Revenue Calculation:

   - Using MongoDb aggregation pipeline calculated total revenue from all orders

4. Validated data before passing it to database

## TechStack:

1. Backend Framework: Express.js

2. Database: MongoDB with Mongoose

3. TypeScript

4. Tools & Libraries:
    - Nodemon (for development)

    - Zod (for data validation)

    - Eslint and Prettier for making code clean and error free


## EndPoints:

1. Create a Book:

   - EndPoint: /api/products

   - Method: POST

2. Get All Books: 

   - EndPoint: /api/products

   - Method: GET

3. Get a specific Book:

   - EndPoint: /api/products/:productId

   - Method: GET

4. Update a Book:

   - EndPoint: /api/products/:productId

   - Method: PUT

5. Delete a Book:

    -EndPoint: /api/products/:productId

    -Method: DELETE

6. Create a Order:

   - EndPoint: /api/orders

   - Method: POST

7. Calculate Revenue: 

   - EndPoint: /api/orders/revenue

   - Method: Get

## Deployment: 

Link: https://bookstore-backend-2.vercel.app/






