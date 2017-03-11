# Express Mysql Boilerplate

> A simple boilerplate for building RESTful API with ExpressJS and Mysql

## Package
- ExpressJS
- Babel
- Mysql
- Knex
- Bookshelf

## Using API
```bash
git clone https://github.com/chutiphon-k/express-mysql-boilerplate.git
npm install
npm run dev # For run development
```

## RESTful API

| HTTP METHOD | GET            | POST       | PUT         | PATCH | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ | ------ |
| /example       | Get Example | Post Example |  | Patch Example | Delete Example |
| /users       | List users | Create new user |  |  |  |
| /users/:id       | Get user by id |  |  | Update user by id | Delete user by id |