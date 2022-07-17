<div style="text-align:center;"><img src="https://raw.githubusercontent.com/lejoaoconte/discuss-social-network/c73cbe649df6d6b2c6547fb15b93d6d697de3f56/src/assets/logo.svg" width="150px"></div>

# (incompleted) Social Network - discuss

This project involved the simple creation of a elementary concepts of social network as profile, posts, comentaries and likes, it's created with React.js, Node.js with Express and other libraries.

The design and concepts of front-end was taken by Rocketseat Ignite course and adapted by the reality which it was best in here.

Demonstration images below:

<div align="center" style="display:flex; text-align:center;">
<img style="margin-right:80px; width: 550px" src="https://raw.githubusercontent.com/lejoaoconte/discuss-social-network/main/src/assets/screen1.png" alt="Demonstration Chat APP">
<img style="width: 135px" src="https://raw.githubusercontent.com/lejoaoconte/discuss-social-network/main/src/assets/screen2.png" alt="Demonstration Chat APP">
</div>

<!-- ## Description -->

<!-- The main idea of this application is created a complete chat which login and auth system, without use of strongest back-end, but which we could understand the concepts as NextAuth, Socket.io, and how work back-end in Next.js and how we could applying this in a application.

In the path <a href="https://github.com/lejoaoconte/chat-app-complete/tree/main/src/pages/api">src/pages/api</a> have the back-end part of system, which involve just two files, one on path auth which as the name said it`s the authentication part and the socket.io which is the stream part. All authentication was made with GoogleProvider of NextAuth providers.

Finally in the front-end we treat the authentication with getServerSideProps function native of Next and the stream chat with Socket.io-client.

The idea in here its to train to posibles future ideas which involves this concepts and maybe use this code in the future. -->

## Getting Started

### Dependencies

The Node.js version of this project is 16.14.2 and the follow libraries which are used are below:

|      library      | version |
|:-----------------:|:-------:|
| date-fns          | 2.28.0  |
| react             | 18.0.0  |
| react-dom         | 18.2.0  |
| react-icons       | 4.4.0   |
| nodemon           | 2.0.19  |
| express           | 4.18.1  |
| mongoose          | 6.4.4   |
| jsonwebtoken      | 8.5.1   |
| cors              | 2.8.5   |
| dotenv            | 16.0.1  |


### Installing and Executing program

If you decide to see the project its just to follow the sequences below:

First of all clone the repository and enter in Visual Code your in your favorite code editor.

```
$ git clone https://github.com/lejoaoconte/discuss-social-network.git
$ cd discuss-social-network
$ code .
```

After it it's necessary to create a JWT random key to generate the token, and go to Mongo Atlas to create a MongoDB database and put this keys on .env file.

```
SALT_KEY = "";


MONGO_USER="";
MONGO_DB="";
MONGO_PASSWORD="";
```

And finally run server

```
$ cd server
$ npm run dev
```

And run app

```
$ npm run dev
```

and access http://localhost:3000. Server is runing on http://localhost:3030/

## Authors

João Conte 
LinkedIn: [/in/lejoaoconte](https://www.linkedin.com/in/lejoaoconte/)

## License

This project is licensed under the MIT License - see the <a href="https://github.com/lejoaoconte/chat-app-complete/blob/main/LICENSE.md" target="_blank">LICENSE.md</a> file for details
