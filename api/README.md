# E-commerce admin cms API server

This is project is a Backend server api build for the admin to create and manage their e commerce store.

This is only the API server part. the client UI is available at rep `....`

## How to use

1. run `git clone <put your git url here>`
2. run `npm i`
3. run `cd <folder name>`
4. run `npm run dev` for the local development. Not that you must have nodemon install in your system, if not run `npm i nodemon -g`

## APIS

All our api url follow the following patterns: `{rootUrl}/api/v1`

### Admin registration and login api

This section show you how you can access the api for admin registration and login.

Note: TODO: make sure the admin registration api is protected after first admin is create becaus only admin can add another admin user.

All registration and login api follow the following patterns `{rootUrl}/api/v1/register-login`

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                            |
| --- | ---- | ------ | ---------- | ---------------------------------------------------------------------- |
| 1.  | `/`  | POST   | yes        | Send user data fName, lName.... to care new admin user in the database |
