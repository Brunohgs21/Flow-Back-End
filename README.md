# API Documentation

**Use yarn command to install all packages.Use yarn typeorm migration:run -d src/data-source.ts to run all migrations. Use yarn dev to run the server.**

Welcome to the documentation for our API! This document provides an overview of the available endpoints, their functionalities, required parameters, and expected responses.

## Authentication

Most of the endpoints in this API require authentication using a bearer token. To authenticate, you should obtain a token by making a POST request to the `/login` endpoint with valid credentials. The token should then be included in the `Authorization` header of subsequent requests to authenticated endpoints.

```http
## Users

### Create User

**Request:**
POST /users
Authorization: Required
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "123456"
}

Response:

json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "johndoe@example.com"
}

Update User
Request:

http
PATCH /users
Authorization: Required
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "password": "newpassword"
}

Response:

json
{
  "id": "user_id",
  "name": "Updated Name",
  "email": "updated@example.com"
}

Delete User
Request:

http
DELETE /users
Authorization: Required

Response:

json
{
  "message": "User has been deleted."
}

List Users
Request:

http
GET /users
Authorization: Required

Response:

json
[
  {
    "id": "user_id",
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": "user_id",
    "name": "Jane Doe",
    "email": "janedoe@example.com"
  },
  // ...
]

Contacts
Create Contact
Request:

http
POST /contacts
Authorization: Required
Content-Type: application/json

{
  "name": "Contact Name",
  "email": "contact@example.com",
  "phone": "555-1234"
}

Response:

json
{
  "id": "contact_id",
  "name": "Contact Name",
  "email": "contact@example.com",
  "phone": "555-1234"
}

Update Contact
Request:

http
PATCH /contacts/{id}
Authorization: Required
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "555-5678"
}

Response:

json
{
  "id": "contact_id",
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "555-5678"
}

Delete Contact
Request:

http
DELETE /contacts/{id}
Authorization: Required

Response:

json
{
  "message": "Contact has been deleted."
}

List All Contacts
Request:

http
GET /contacts
Authorization: Required

Response:

json
[
  {
    "id": "contact_id",
    "name": "Contact Name 1",
    "email": "contact1@example.com",
    "phone": "555-1234"
  },
  {
    "id": "contact_id",
    "name": "Contact Name 2",
    "email": "contact2@example.com",
    "phone": "555-5678"
  },
  // ...
]

Please ensure that you include the required Authorization header with a valid bearer token when accessing authenticated endpoints.

For more details on each endpoint, including example responses, refer to the corresponding section in this documentation.

Happy coding!
```
