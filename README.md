# Faster Than Light-API

## Usage
To play with the project you should:

```sh
git clone git@github.com:JoseMix/ftl-API.git
cd ftl-API
npm i
npm run start
```

### INFO
It's recommended to use Postman to interact with the API [Postman](https://www.postman.com/)

## You have 3 ways of running this project:
```sh
npm run start --Runs production environment
npm run dev --Runs development environment
npm run test --Runs all the tests
```


### ROUTES
| Method | URI | Result
| ------ | ------ | ------ |
| GET | localhost:3000/api/v1/spaceship | Get all spaceships in the garage   |
| POST | localhost:3000/api/v1/spaceship | Create a new spaceship and add to the garage  |
| PATCH | localhost:3000/api/v1/spaceship/shoot/:id | Shoot from one spaceship A to another spaceship B   |

### GET 
It returns all the spaceships inside the garage, answer looks like this.
```sh
[
    {
        "_id": "8SY9maGwraV-RwEXeE_xv",
        "health": "100"
    },
    {
        "_id": "p_TT7ibNrubPWzbiMG6yY",
        "health": "100"
    }
]
```

### POST 
Creates a new spaceship and adds to the garage.
You need to pass the variable health with a numeric value in POSTMAN, the answer should look like this:

```sh
{
    "_id": "8SY9maGwraV-RwEXeE_xv",
    "health": "100"
}
```
### PATCH 
It shoots from one spaceship to another.
You should pass the id of the shooter in the URI and the enemy spaceship id should be pass inside enemy variable. The answer should look like this if both id's exists:
```sh
"Enemy hit!"
```



