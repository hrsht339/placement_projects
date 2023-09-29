## Endpoint: POST /api/register
Enable registration for users through this endpoint, and ensure that passwords are hashed and stored securely.
### Request Body
```
{
  "name": "harshit",
  "email": "harshit.sahu@gmail.com",
  "password": "qwerty",
  "address": {
    "street": "String",
    "city": "String",
    "state": "String",
    "country": "String",
    "zip": "String"
  }
}
```

## Endpoint: POST /api/login
This endpoint should permit user login and issue a JWT token upon successful login.
### Request Body
```
{
  "email": "harshit.sahu@gmail.com",
  "password": "12345"
}
```

## Endpoint: PUT /api/user/:id/reset
Users should be able to reset their password by providing their user ID, current password, and new password in the request body through this endpoint.
### Request Body
```
{
  "email": "harshit.sahu@gmail.com",
  "password": "qwerty",
  "newPassword":"12345"
}
```

## Endpoint: GET /api/restaurants
This endpoint should provide a list of all the restaurants currently available.
### Response Body
```{
    "msg": "all the restaurants down below",
    "data": [
        {
            "address": {
                "street": "String",
                "city": "String",
                "state": "String",
                "country": "String",
                "zip": "String"
            },
            "_id": "64784c8ec690ba9f4991e63e",
            "name": "String",
            "menu": [
                {
                    "name": "new",
                    "description": "String",
                    "price": 90,
                    "image": "String",
                    "_id": "64784e86036e4c736fa10b60"
                }
            ],
            "__v": 0
        }
    ]
}

```

## Endpoint: GET /api/restaurants/:id
This endpoint should retrieve the specific details of a restaurant identified by its unique ID.
### Response Body
```
{
    "msg": "one restaurant down below",
    "data": {
        "address": {
            "street": "String",
            "city": "String",
            "state": "String",
            "country": "String",
            "zip": "String"
        },
        "_id": "64784c8ec690ba9f4991e63e",
        "name": "String",
        "menu": [
            {
                "name": "new",
                "description": "String",
                "price": 90,
                "image": "String",
                "_id": "64784e86036e4c736fa10b60"
            }
        ],
        "__v": 0
    }
}
```

## Endpoint: GET /api/restaurants/:id/menu
This endpoint should provide the menu of a particular restaurant, which can be identified by its unique ID.
### Request Body
```
{
    "msg": "menu down below",
    "menu": [
        {
            "name": "String",
            "description": "String",
            "price": 45,
            "image": "String",
            "_id": "64784c8ec690ba9f4991e63f"
        },
        {
            "name": "new",
            "description": "String",
            "price": 90,
            "image": "String",
            "_id": "64784c8ec690ba9f4991e63f"
        },
        {
            "name": "new",
            "description": "String",
            "price": 90,
            "image": "String",
            "_id": "64784e86036e4c736fa10b60"
        }
    ]
}
```

## Endpoint: PUT /api/restaurants/:id/menu
Users should be able to add a new item to the menu of a specific restaurant, which can be identified by its unique ID, using this endpoint.


## Endpoint: DELETE /api/restaurants/:id/menu/:id
This endpoint should enable users to remove a specific menu item, identified by its unique ID, from a particular restaurant's menu.
### Response Body
```
{
    "msg": "menu deleted",
    "menu": [
        {
            "name": "new",
            "description": "String",
            "price": 90,
            "image": "String",
            "_id": "64784e86036e4c736fa10b60"
        }
    ]
}
```

## Endpoint: POST /api/orders
Users should be able to place an order using this endpoint.
### Request Body
```
{
	 "restaurant" : "64784c8ec690ba9f4991e63e",
   "items": [{
     "name": "String",
     "price": 45,
     "quantity": 4
   }],
   "totalPrice": 3453,
   "deliveryAddress": {
     "street": "delhi",
     "city": "mumbai",
     "state": "String",
     "country": "String",
     "zip": "String"
   },
   "status": "placed"
}
```

## Endpoint: GET /api/orders/:id
This endpoint should provide the details of a specific order, which can be identified by its unique ID.
### Response Body
```
{
    "msg": "order below",
    "data": {
        "deliveryAddress": {
            "street": "delhi",
            "city": "mumbai",
            "state": "String",
            "country": "String",
            "zip": "String"
        },
        "_id": "647858ea217e5cf0485bc89b",
        "user": "647842cdb1036d3661239413",
        "restaurant": "64784c8ec690ba9f4991e63e",
        "items": [
            {
                "name": "String",
                "price": 45,
                "quantity": 4,
                "_id": "6478594d217e5cf0485bc8a2"
            }
        ],
        "totalPrice": 3453,
        "status": "placed",
        "__v": 0
    }
}
```

## Endpoint: PUT /api/orders/:id
This endpoint should enable users to update the status of a specific order, identified by its unique ID.
### Request Body
```
{
    "msg": "order updated",
    "data": {
        "deliveryAddress": {
            "street": "delhi",
            "city": "mumbai",
            "state": "String",
            "country": "String",
            "zip": "String"
        },
        "_id": "647858ea217e5cf0485bc89b",
        "user": "647842cdb1036d3661239413",
        "restaurant": "64784c8ec690ba9f4991e63e",
        "items": [
            {
                "name": "String",
                "price": 45,
                "quantity": 4,
                "_id": "6478594d217e5cf0485bc8a2"
            }
        ],
        "totalPrice": 3453,
        "status": "placed",
        "__v": 0
    }
}
```



## Demonstration Video Link Down Below:-
