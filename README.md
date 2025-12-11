# Nest Mikulas

A NestJS REST API for managing children and toys, built with Prisma and MySQL.

## Description

This application provides a simple API to track children and their toys. Perfect for managing gift lists and toy inventories.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database Setup

```bash
# Set up your database connection in .env file
DATABASE_URL="mysql://user:password@localhost:3306/nest_mikulas"

# Run migrations
$ npx prisma migrate dev

# Seed the database (optional)
$ npx prisma db seed
```

## API Endpoints

### Children
- `GET /children` - Get all children
- `GET /children/:id` - Get a child by ID
- `POST /children` - Create a new child
- `PATCH /children/:id` - Update a child
- `DELETE /children/:id` - Delete a child
- `PUT /children/:id/toys/:id` - Add a toy to a child
- `DELETE /children/:id/toys/:id` - Remove a toy from a child

### Toys
- `GET /toys` - Get all toys
- `GET /toys/:id` - Get a toy by ID
- `POST /toys` - Create a new toy
- `PATCH /toys/:id` - Update a toy
- `DELETE /toys/:id` - Delete a toy

## Postman Integration

This project includes Postman integration for easy API testing. You can import the API collection and start testing all endpoints right away. The Postman integration includes pre-configured requests for all CRUD operations on both children and toys resources.

## Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
