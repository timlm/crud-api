# Upskilling Formation Angular

Welcome to the Angular formation  
This github is an expressjs Back-end server with a basic CRUD api  
  
Your project is to develop an Front-end Angular application, using thoses api.

## Getting started with the sever

The back-end provide an api to get, create, update and delete an user    

Installation is done using the command:  
`npm install`

Run the server with the command:  
`npm start`

The server is now available at localhost:3000, check the url to see if you have `Server is up`

### 'Users' model

Twenty users already exist  
No Database installation is needed, for that mini project, the user's data will be stored in a json file.  
```
./server/domain-layer/data-access/data/users.json
```
In case datas get corrupted, replace the file by the backup one. It has the original data.
```
./server/domain-layer/data-access/data/users-backup.json
```

The 'users' model is :

```
{
        "id": number,
        "email": string,
        "isActive": boolean,
        "firstname": string,
        "lastname": "string,
        "age": number,
        "company": string,
        "phone": "number,
        "address": string,
        "favoriteFruit": string
 }
```


### Api description
#### Get all users
```
GET /users
```

__  __
#### Get a user
```
GET /users/:id
```
'id' is the primary key of user

__  ___
#### Create a new user
```
POST /users
```
If a user with the same email already exist, the creation will fail.
The attributs: "email", "firstname", "lastname", "isActive" are mandatory when creating a new user    

Body example  
```
{
        "email": "tim.tim@test.com",
        "firstname": "Tim",
        "lastname":"Tim",
        "isActive": true
}
```
__  __
#### Update an user
```
/users/:id
```

'id' is the primary key of an user  
If the user's email is updated and is already taken by someone, the update will fail. 
The attributs: "email", "firstname", "lastname", "isActive" are mandatory when updating a new user    

Body example  
```
{
        "email": "tim.tim@test.com",
        "firstname": "Tim",
        "lastname":"Tim",
        "isActive": true
}
```
__  __
#### Delete an user
```
/users/:id
```

'id' is the primary key of an user  
The deletion will fail if no user with the corresponding id

# Project Specifications

## Users stories

```
Some notabene will be written in italic 
```
#### As a simple user, I want to access the list of all users stored in the server
A view list of all users saved in the application   
An user will show his email, his age, his firstname and his lastname
  
Severals features needed:
* Order by age ascending or descending
* Filter by user active or not (default both)
* Search by firstname or/and lastname

*Unfortunately our back api does not provide filters, we have to do thoses feature on the front-end app, It will be best to not use Pipe for ordering and filtering as said by the angular guide*

___
#### As a simple user, I want to access to the detail of an user
The detail view provide all the information of the user
___
#### As a simple user, I want to deactivate an user
Deactivate an user pressing a button on the detail view or the list view
The user detail should not be accessible when deactivated and should be redirected to a 403 page
___
#### As a simple user, I want to delete an existing user
Delete an user pressing a button on the detail view or the list view

*Should I redirect the user after the user is deleted on the detail view ?*   
___
#### As a simple user, I want to create a new user

A complete and valid form to create a new user

* Using validators type with errors message
* Be careful with the mandatory attributes
* Corresponding errors in the validators to inform the user if the operation has failed

*Our back end does not have a correct sanitizing, We have to be very strict on the input type for each attributs*
___
#### As a simple user, I want to update an existing user
The update view can be access by the user list or the user detail

*We can perhaps reuse the creation form*
___

#### As a simple user, I want to have a correct error handling for 40x, 50x pages
When going an unknow route, forbidden route or if there is an internal server error, the user should be redirected to appropriate pages
___

## Angular best practices
Through the project, we would like you to follow the Angular style guide including the following:
- Structural folder structure
- Single responsability
- Using multiples modules
- Using a correct router configuration
- Follow the Reactive Form guide
- Using a global error system
- Be aware of service layer
- Comment the code
- Using factorization method and reusability
- Correct naming convention
- Unit testing

## UX/UI Integration
There is no UX design prepared, the design will come from your experience on web application.  
There is no UI integration provided at the beginning. You are free to chose whatever you want.  
Using custom and modern CSS is still appreciated (ex: css grids, flexbox, responsive....)
