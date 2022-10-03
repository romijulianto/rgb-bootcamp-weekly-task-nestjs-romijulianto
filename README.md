### Practice REST API Using NestJS and Sequelize

_Documentation by Romi Julianto_

## Installation

```bash
- npm i -g @nestjs/cli
- nest new nest-sequelize-simple-api
- npm install -g sequelize
- npm install --save sequelize sequelize-typescript mysql2
- npm install --save-dev @types/sequelize
- npm install dotenv --save
- npm i --save @nestjs/config
- npm install --save @nestjs/passport passport passport-local
- npm install --save-dev @types/passport-local
- npm install bcrypt --save
- npm install @nestjs/jwt passport-jwt
- npm i class-validator class-transformer --save
- npm i --save class-validator class-transformer
```

## Generate Module NestJS

```bash
- nest generate module core/database
- nest generate module modules/users
- nest generate service modules/users
- nest generate module modules/auth
- nest generate service modules/auth
- nest g co modules/auth
- nest g module modules/clinics
- nest g service modules/clinics
- nest g controller modules/clinics
```

### Referensi

- [How to Build Web APIs with NestJS, Postgres, and Sequelize - A Beginner's Guide](https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/)
