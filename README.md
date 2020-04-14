# Upskilling Formation Angular

Welcome to the Angular formation  
This github is an expressjs Back-end server with a basic CRUD api  
  
Your project is to develop an Front-end Angular application, using thoses api.

## Getting started with the sever

The back-end provide an api for getting, creating, updating et deleting an user
  
    

Installation is done using the command:  
`npm install`

Run the server with the command:  
`npm start`

The server is now available at localhost:3000

### 'Users' model

Twenty users existed already  
No Database installation needed, for that mini project, the data users will be stored in a json file.  
```
./server/domain-layer/data-access/data/users.json
```
In case the file get corrupted, replace the file by the backup one. It has the original data.
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
####Get a user
```
GET /users/:id
```
'id' is the primary key of user

__  ___
####Create a new user
```
POST /users
```
Creation will fail there is already a user with the same email  
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
####Update an item
```
/users/:id
```

'id' is the primary key of an user  
Creation will fail if the users updated has a email
already register by someone else  

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
####Delete an user
```
/users/:id
```

'id' is the primary key of an user  
The process will fail if there is no user with that id




# Project Specifications

##Users stories

```
Some notabene will be written in italic 
```
####As an simple user, I want to access of the list of all users stored in the server
A view list of all users saved in the application   
An user will show his email, his age, his firstname and his lastname
  
Severals features needed:
* Order by age ascending or descending
* Filter by user active or not (default both)
* Search by firstname or/and lastname

*Unfortunately our back api does not provide filters, we have to do thoses feature on the front-end app, It will be best to not use Pipe for ordering and filtering as said by the angular guide*

___
#### As an simple user, I want to access to the detail of one user
The detail view provided all the informations of the user
___
#### As an simple user, I want to delete an existing user
Delete an user pressing a button on the detail view or the list view

*Should I redirect the user after the user is deleted on the detail view ?*   
___
#### As an simple user, I want to create a new user

A complete and valid form to create a new user

* Using validators type with errors message
* Be careful with the mandatories attributs

*Our back end does not have a correct sanitizing, We have to be very strict on the input type for each attributs*
___
#### As an simple user, I want to update an existing user
The update view can be access by the user list or the user detail

*We can perhaps reuse the creation form*
___

##Angular best practices
Throught the project, would like you to follow the Angular style guide including the following:
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
Using custom and modern CSS is still appreciated
