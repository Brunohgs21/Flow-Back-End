# API Documentation

**Use yarn command to install all packages. Use yarn dev to run the server.**

Welcome to the documentation for our API! This document provides an overview of the available endpoints, their functionalities, required parameters, and expected responses.

## Authentication

Most of the endpoints in this API require authentication using a bearer token. To authenticate, you should obtain a token by making a POST request to the `/login` endpoint with valid credentials. The token should then be included in the `Authorization` header of subsequent requests to authenticated endpoints.

## Users

<details>
<summary>Create User</summary>

**Request:**

```http
POST /users
Authorization: Required
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "123456"
}
Save to grepper
Response:

json
Copy code
{
  "id": "user_id",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
Save to grepper
</details>
<details>
<summary>Update User</summary>
Request:

http
Copy code
PATCH /users
Authorization: Required
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "password": "newpassword"
}
Save to grepper
Response:

json
Copy code
{
  "id": "user_id",
  "name": "Updated Name",
  "email": "updated@example.com"
}
Save to grepper
</details>
<details>
<summary>Delete User</summary>
Request:

http
Copy code
DELETE /users
Authorization: Required
Save to grepper
Response:

json
Copy code
{
  "message": "User has been deleted."
}
Save to grepper
</details>
<details>
<summary>List Users</summary>
Request:

http
Copy code
GET /users
Authorization: Required
Save to grepper
Response:

json
Copy code
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
Save to grepper
</details>
Contacts
<details>
<summary>Create Contact</summary>
Request:

http
Copy code
POST /contacts
Authorization: Required
Content-Type: application/json

{
  "name": "Contact Name",
  "email": "contact@example.com",
  "phone": "555-1234"
}
Save to grepper
Response:

json
Copy code
{
  "id": "contact_id",
  "name": "Contact Name",
  "email": "contact@example.com",
  "phone": "555-1234"
}
Save to grepper
</details>
<details>
<summary>Update Contact</summary>
Request:

http
Copy code
PATCH /contacts/{id}
Authorization: Required
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "555-5678"
}
Save to grepper
Response:

json
Copy code
{
  "id": "contact_id",
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "555-5678"
}
Save to grepper
</details>
<details>
<summary>Delete Contact</summary>
Request:

http
Copy code
DELETE /contacts/{id}
Authorization: Required
Save to grepper
Response:

json
Copy code
{
  "message": "Contact has been deleted."
}
Save to grepper
</details>
<details>
<summary>List All Contacts</summary>
Request:

http
Copy code
GET /contacts
Authorization: Required
Save to grepper
Response:

json
Copy code
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
Save to grepper
</details>
Please ensure that you include the required Authorization header with a valid bearer token when accessing authenticated endpoints.

For more details on each endpoint, including example responses, refer to the corresponding section in this documentation.

Happy coding!

html
Copy code
<script>
  function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Request copied to clipboard!');
  }
</script>
```
