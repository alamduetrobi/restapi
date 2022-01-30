// Most Important Requirement For Rest API design

// 1. Identify Object Model

/* 
User Data

-name
-email
-password
-birghtday
-phoneno

POST: 

-title
- body
- [comments]
- likes
- createdTime 
- UpdatedTime 
*/

// 2. Create Model URI

/*
For User 
https://example.com/api/user  GET
https://example.com/api/user/:id POST

https://example.com/api/users/:id GET
https://example.com/api/users/:id PUT/PATCH
https://example.com/api/users/:id DELETE

https://example.com/api/posts GET
https://example.com/api/posts/:id  POST/ PATCH
https://example.com/api/posts/:id  DELETE
*/

// 3. Determine Representation

/* 
[

    {
    name: 'HM Nayem'
    id: '123',
    email: 'hasan.m.nayem@gmail.com'
    password: 64646464
    phone: 046460464064
    birthday: 21 nov
},
{
    name: 'HM Nayem'
    id: '123',
    email: 'hasan.m.nayem@gmail.com'
    password: 64646464
    phone: 046460464064
    birthday: 21 nov
},
{
    name: 'HM Nayem'
    id: '123',
    email: 'hasan.m.nayem@gmail.com'
    password: 64646464
    phone: 046460464064
    birthday: 21 nov
},
{
    name: 'HM Nayem'
    id: '123',
    email: 'hasan.m.nayem@gmail.com'
    password: 64646464
    phone: 046460464064
    birthday: 21 nov
}
]

*/

// 3. Single Data Represent

/*


{
    name: 'HM Nayem'
    id: '123',
    email: 'hasan.m.nayem@gmail.com'
    password: 64646464
    phone: 046460464064
    birthday: 21 nov
}

 */
// 4. Json View

/* 

user:[
    
{
    "name": "'HM Nayem'"
    "id": "'123'",
    "email": '"hasan.m.nayem@gmail.com'"
    "password": "64646464"
    "phone": "046460464064"
    "birthday": "21 nov"
}
]

 */

// user[0].name
//user.[email].name
