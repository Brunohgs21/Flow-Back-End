# Flow-Back-End

API Documentation
Welcome to the documentation for our API! This document provides an overview of the available endpoints, their functionalities, required parameters, and expected responses.

Authentication
Most of the endpoints in this API require authentication using a bearer token. To authenticate, you should obtain a token by making a POST request to the /login endpoint with valid credentials. The token should then be included in the Authorization header of subsequent requests to authenticated endpoints.

Users

Create User
Create a new user by sending a POST request to the /users endpoint. You should provide the following data in the request body:

{
"name": "John Doe",
"email": "johndoe@example.com",
"password": "123456"
}

Request: POST /users
Authorization: Required
Request Body: JSON object with name, email, and password properties.
Response: Returns the created user's data, including the id, name, and email.

Update User
Update an existing user's information by sending a PATCH request to the /users endpoint. You should provide the following data in the request body:

{
"name": "Updated Name",
"email": "updated@example.com",
"password": "newpassword"
}

Request: PATCH /users
Authorization: Required
Request Body: JSON object with updated name, email, and password properties.
Response: Returns the updated user's data, including the id, name, and email.

Delete User
Delete an existing user by sending a DELETE request to the /users endpoint.

Request: DELETE /users
Authorization: Required
Response: Returns a message indicating the user has been deleted.

List Users
Retrieve a list of all users by sending a GET request to the /users endpoint.

Request: GET /users
Authorization: Required
Response: Returns an array of user objects, each containing the id, name, and email.

Contacts

Create Contact
Create a new contact by sending a POST request to the /contacts endpoint. You should provide the following data in the request body:

{
"name": "Contact Name",
"email": "contact@example.com",
"phone": "555-1234"
}

Request: POST /contacts
Authorization: Required
Request Body: JSON object with name, email, and phone properties.
Response: Returns the created contact's data, including the id, name, email, and phone.

Update Contact
Update an existing contact's information by sending a PATCH request to the /contacts/{id} endpoint. Replace {id} with the ID of the contact you want to update. You should provide the following data in the request body:

{
"name": "Updated Name",
"email": "updated@example.com",
"phone": "555-5678"
}

Request: PATCH /contacts/{id}
Authorization: Required
Request Body: JSON object with updated name, email, and phone properties.
Response: Returns the updated contact's data, including the id, name, email, and phone.

Delete Contact
Delete an existing contact by sending a DELETE request to the /contacts/{id} endpoint. Replace {id} with the ID of the contact you want to delete.

Request: DELETE /contacts/{id}
Authorization: Required
Response: Returns a message indicating the contact has been deleted.

List All Contacts
Retrieve a list of all contacts by sending a GET request to the /contacts endpoint.

Request: GET /contacts
Authorization: Required
Response: Returns an array of contact objects, each containing the id, name, email, and phone.
Please ensure that you include the required Authorization header with a valid bearer token when accessing authenticated endpoints. For more details on each endpoint, including example responses, refer to the corresponding section in this documentation. Happy coding!
