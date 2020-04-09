const DEFAULT_STATE = {
    displayProducts: [
        {
        "imgURL": {
            "posters": [
                "https://res.cloudinary.com/comicom/image/upload/v1585803884/Captain%20America/portrait_uncanny_o4rzoz.jpg"
            ],
            "main": "https://res.cloudinary.com/comicom/image/upload/v1585803874/Captain%20America/portrait_uncanny_aizo1u.jpg"
        },
        "category": [
            "Action"
        ],
        "characters": [
            "Captain America",
            "Nick Fury"
        ],
        "tags": [
            "Captain America",
            "THE LEGEND OF STEVE",
            "Steve Rogers"
        ],
        "datecreated": "2020-04-02T05:06:53.059Z",
        "_id": "5e8572f2c5f03c39f818852b",
        "name": "Captain America (2018) #14",
        "description": "“THE LEGEND OF STEVE” CONTINUES! As Steve Rogers continues to try to prove his innocence and remain one step ahead of the pursuing Nick Fury, he and Mockingbird journey to Iowa, where a town is held in the thrall of the mysterious group known only as –THEM!",
        "regularPrice": 230,
        "discountedPrice": 130,
        "itemsInStock": 4,
        "publication": "Marvel",
        "__v": 0
    },
    {
        "imgURL": {
            "posters": [
                "https://res.cloudinary.com/comicom/image/upload/v1585804260/Captain%20America/clean_byq3ci.jpg"
            ],
            "main": "https://res.cloudinary.com/comicom/image/upload/v1585804256/Captain%20America/clean_fv7cci.jpg"
        },
        "category": [
            "Thriller"
        ],
        "characters": [
            "Captain America",
            "Nick Fury"
        ],
        "tags": [
            "Captain America",
            "THE LEGEND OF STEVE",
            "Steve Rogers"
        ],
        "datecreated": "2020-04-02T05:06:53.059Z",
        "_id": "5e857401c5f03c39f818852c",
        "name": "Captain America (2018) #17",
        "description": "THE LEGEND OF STEVE continues! How can Steve Rogers track down the cop-killer who is waging war against the men in blue in New York City when he’s every bit as wanted by the cops he’s trying to save?",
        "regularPrice": 200,
        "discountedPrice": 180,
        "itemsInStock": 5,
        "publication": "Marvel",
        "__v": 0
    },
    {
        "imgURL": {
            "posters": [
                "https://res.cloudinary.com/comicom/image/upload/v1585804459/Captain%20America/clean_htzavj.jpg"
            ],
            "main": "https://res.cloudinary.com/comicom/image/upload/v1585804459/Captain%20America/clean_htzavj.jpg"
        },
        "category": [
            "Thriller"
        ],
        "characters": [
            "Captain America",
            "Nick Fury"
        ],
        "tags": [
            "Captain America",
            "THE LEGEND OF STEVE",
            "Steve Rogers",
            "Hydra"
        ],
        "datecreated": "2020-04-02T05:06:53.059Z",
        "_id": "5e8574bfc5f03c39f818852d",
        "name": "Captain America (2018) #1",
        "description": "IT IS WINTER IN AMERICA.For over 70 years, he has stood in stalwart defense of our country and its people. But in the aftermath of Hydra’s takeover of the nation, Captain America is a figure of controversy, carrying a tarnished shield…and a new enemy is rising! Who are the Power Elite? And how do they intend to co-opt and corrupt the symbol that is Captain America?",
        "regularPrice": 300,
        "discountedPrice": 195,
        "itemsInStock": 10,
        "publication": "Marvel",
        "__v": 0
    },
    {
        "imgURL": {
            "posters": [
                "https://res.cloudinary.com/comicom/image/upload/v1585804666/Star%20Wars/clean_wzyqsj.jpg"
            ],
            "main": "https://res.cloudinary.com/comicom/image/upload/v1585804666/Star%20Wars/clean_wzyqsj.jpg"
        },
        "category": [
            "Action"
        ],
        "characters": [
            "Darth Vader",
            "Anakin Skywalker",
            "Obi-Wan Kenobi"
        ],
        "tags": [
            "Darth Vader",
            "Anakin Skywalker",
            "Obi-Wan Kenobi",
            "Sith"
        ],
        "datecreated": "2020-04-02T05:06:53.059Z",
        "_id": "5e85758dc5f03c39f818852e",
        "name": "Darth Vader (2017) #1",
        "description": "The most fearsome villain of all time returns with an all-new series! When Anakin Skywalker fell, both to the pull of the dark side and to the blade of Obi-Wan Kenobi, he rose back up, more machine than man. Having lost everything that was once dear to him, the former chosen one must take his first steps into a darker world…as Darth Vader, Dark Lord of the Sith!",
        "regularPrice": 350,
        "discountedPrice": 215,
        "itemsInStock": 2,
        "publication": "Marvel",
        "__v": 0
    }],
    displayProductsDetail:{
        "imgURL": {
            "posters": [
                "https://res.cloudinary.com/comicom/image/upload/v1585804666/Star%20Wars/clean_wzyqsj.jpg"
            ],
            "main": "https://res.cloudinary.com/comicom/image/upload/v1585804666/Star%20Wars/clean_wzyqsj.jpg"
        },
        "category": [
            "Action"
        ],
        "characters": [
            "Darth Vader",
            "Anakin Skywalker",
            "Obi-Wan Kenobi"
        ],
        "tags": [
            "Darth Vader",
            "Anakin Skywalker",
            "Obi-Wan Kenobi",
            "Sith"
        ],
        "datecreated": "2020-04-02T05:06:53.059Z",
        "_id": "5e85758dc5f03c39f818852e",
        "name": "Darth Vader (2017) #1",
        "description": "The most fearsome villain of all time returns with an all-new series! When Anakin Skywalker fell, both to the pull of the dark side and to the blade of Obi-Wan Kenobi, he rose back up, more machine than man. Having lost everything that was once dear to him, the former chosen one must take his first steps into a darker world…as Darth Vader, Dark Lord of the Sith!",
        "regularPrice": 350,
        "discountedPrice": 215,
        "itemsInStock": 2,
        "publication": "Marvel",
        "__v": 0
    }
}

export const productReducer = (state = DEFAULT_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'SET_USER':
            console.log(action.payload)
            return state;
        default:
            return state;
    }
}