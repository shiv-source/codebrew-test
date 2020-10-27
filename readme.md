# Codebrewlabs-test

Commands :

npm start

For development

npm run dev



## API Doccumentations:

1. SignUp [POST]

http://127.0.0.1:3000/api/signup   [for user]

http://127.0.0.1:3000/api/signup-admin  [ for admin (like pump owner / operator )]


            request data : 

                        {
                                "name":"shiv",
                                "email":"developer.shiv2032@gmail.com",
                                "password" : "admin12345",
                                "role" :"user",
                            "location": {
                                "type" : "Point",
                            "coordinates" : [
                                125.5,
                                46.0
                            ]
                            }


                        }

            response data :



                    {
                        "message": "User created successfully",
                        "success": true,
                        "result": {
                            "_id": "5f97be919f26281664bf4bad",
                            "name": "shiv",
                            "email": "developer.shiv2032@gmail.com"
                        }
                    }


2. Login [POST]


http://127.0.0.1:3000/api/login

    
    
                    request data : 

                            {
                                "email":"developer.shiv2020@gmail.com",
                                "password":"admin12345"
                            }


                    response data :


                        {
                            "message": "You are loggedin successfully",
                            "success": true,
                            "_id": "5f97bd7b9f26281664bf4ba1",
                            "role": "user",
                            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk3YmQ3YjlmMjYyODE2NjRiZjRiYTEiLCJuYW1lIjoic2hpdiIsImVtYWlsIjoiZGV2ZWxvcGVyLnNoaXYyMDIwQGdtYWlsLmNvbSIsImlhdCI6MTYwMzc4NTM3NCwiZXhwIjoxNjA0MzkwMTc0fQ.4xHJlwTBsn7yEhsypljYKMy0oP_jFf2KegwkG2rh_6o"
                        }


3. profile

http://127.0.0.1:3000/api/profile [GET]


                    response data :

                                {
                                    "message": "Successfully fetched your profile data",
                                    "success": true,
                                    "_id": "5f97bd7b9f26281664bf4ba1",
                                    "name": "shiv",
                                    "email": "developer.shiv2020@gmail.com",
                                    "role": "user",
                                    "updatedAt": "2020-10-27T06:26:03.533Z",
                                    "createdAt": "2020-10-27T06:26:03.533Z"
                                }




4. search nearer user 

http://127.0.0.1:3000/api/search  [POST]





                        request data : 


                                    {
                                        "maxDistance":"10000000",
                                        "long" : "102",
                                        "lat" : 45
                                    
                                    }




                        response data :

                                    {
                                        "message": "Successfully fetched the data",
                                        "success": true,
                                        "result": [
                                            {
                                                "_id": "5f97bde59f26281664bf4ba2",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        122.5,
                                                        47.7
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2021@gmail.com"
                                            },
                                            {
                                                "_id": "5f97bdf09f26281664bf4ba3",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        125.5,
                                                        47.7
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2022@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be919f26281664bf4bad",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        125.5,
                                                        46
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2032@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be769f26281664bf4bac",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        125.6,
                                                        46.4
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2031@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be6a9f26281664bf4bab",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        125.7,
                                                        46.3
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2030@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be5e9f26281664bf4baa",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        125.8,
                                                        46.2
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2029@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be529f26281664bf4ba9",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        125.9,
                                                        46.1
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2028@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be339f26281664bf4ba7",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        126.2,
                                                        48.8
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2026@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be019f26281664bf4ba4",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        126.5,
                                                        48.7
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2023@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be199f26281664bf4ba5",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        126.6,
                                                        48.5
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2024@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be259f26281664bf4ba6",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        126.8,
                                                        48.4
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2025@gmail.com"
                                            },
                                            {
                                                "_id": "5f97be409f26281664bf4ba8",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        126.9,
                                                        48.1
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2027@gmail.com"
                                            },
                                            {
                                                "_id": "5f97bd7b9f26281664bf4ba1",
                                                "location": {
                                                    "type": "Point",
                                                    "coordinates": [
                                                        -122.5,
                                                        37.7
                                                    ]
                                                },
                                                "name": "shiv",
                                                "email": "developer.shiv2020@gmail.com"
                                            }
                                        ]
                                    }

5. request for booking 

http://127.0.0.1:3000/api/booking/5f97bd7b9f26281664bf4ba1  [PUT]


request data : 



            {
                "fillingType" : "Gas"
            }


response data :

                {
                    "message": "booking done",
                    "success": true
                }


6. view all bookings
 
http://127.0.0.1:3000/api/view-booking  [GET]


               response data :



                            {
                                "message": "successfully fetched bookings",
                                "success": true,
                                "result": [
                                    {
                                        "_id": "5f97bd7b9f26281664bf4ba1",
                                        "name": "shiv",
                                        "email": "developer.shiv2020@gmail.com",
                                        "booking": "Gas"
                                    },
                                    {
                                        "_id": "5f97bde59f26281664bf4ba2",
                                        "name": "shiv",
                                        "email": "developer.shiv2021@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97bdf09f26281664bf4ba3",
                                        "name": "shiv",
                                        "email": "developer.shiv2022@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be019f26281664bf4ba4",
                                        "name": "shiv",
                                        "email": "developer.shiv2023@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be199f26281664bf4ba5",
                                        "name": "shiv",
                                        "email": "developer.shiv2024@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be259f26281664bf4ba6",
                                        "name": "shiv",
                                        "email": "developer.shiv2025@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be339f26281664bf4ba7",
                                        "name": "shiv",
                                        "email": "developer.shiv2026@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be409f26281664bf4ba8",
                                        "name": "shiv",
                                        "email": "developer.shiv2027@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be529f26281664bf4ba9",
                                        "name": "shiv",
                                        "email": "developer.shiv2028@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be5e9f26281664bf4baa",
                                        "name": "shiv",
                                        "email": "developer.shiv2029@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be6a9f26281664bf4bab",
                                        "name": "shiv",
                                        "email": "developer.shiv2030@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be769f26281664bf4bac",
                                        "name": "shiv",
                                        "email": "developer.shiv2031@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97be919f26281664bf4bad",
                                        "name": "shiv",
                                        "email": "developer.shiv2032@gmail.com",
                                        "booking": null
                                    },
                                    {
                                        "_id": "5f97d6f42f9afd2194e88f57",
                                        "name": "shiv",
                                        "email": "developer.shiv2033@gmail.com",
                                        "booking": null
                                    }
                                ]
                            }



        error response :

                {
                    "message": "You are unauthorized to fetch the data",
                    "success": false
                }


9. http://127.0.0.1:3000/api/upload-file [POST]

file limit = 3mb


                response data:  

                        {
                            "message": "file uploaded successfully",
                            "success": true
                        }