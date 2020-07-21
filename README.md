# Working Well

### Description

Working Well is a responsive web app created to help people stay focused on their tasks or activities. I used the [Pomodoro technique]([https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro](https://es.wikipedia.org/wiki/Técnica_Pomodoro)) as an example to create this app.

### How to use it?

You will have to open two terminals and follow each steps for each of them:

**Back-end**

```js
$ git clone https://github.com/arimagic-8bit/Working-Well.git
$ npm i

Create a .env file with this info:
- MONGODB_URI=mongodb://localhost:27017/working-well
- PORT=5000
- SECRET_SESSION=thebestapp (or whatever you want)
- PUBLIC_DOMAIN=http://localhost:3000

$ npm run start:dev
```

**Front-end**

```javascript
$ git clone https://github.com/arimagic-8bit/Working-Well-Client.git
$ npm i

Create a .env file with this info:
- BASE_URL=http://localhost:5000

$ npm run start
```



### User stories

**Signup**: As an anon I can sign up in the platform so that I can start using the app.

**Login**: As a user I can login to the platform so that I can start using the app.

**Logout**: As a user I can logout from the platform so no one else can use it.

**Set task/activity**: As a user I can create a task or activity I want to focus on and set my working and rest time.

### Backlog

- Add relaxing music when doing the task/activity.
- Add different time managing techniques that the user can choose. 
- Edit or remove activities 

## Client/Frontend

### React Router Routes

`<Route>` = allows anyone to see the page.

`<PublicRoute>` = allows unauthenticated users to see the page.

`<PrivateRoute>` = allows only authenticated users to see the page.

|     Path      |    Component     |    Permissions    |            Description             |
| :-----------: | :--------------: | :---------------: | :--------------------------------: |
|      `/`      |   SplashScreen   | `<PublicRoute/>`  |  Home page with info about he app  |
|   `/signup`   |   SignupScreen   | `<PublicRoute/>`  |            Signup form             |
|   `/login`    |   LoginScreen    | `<PublicRoute/>`  |             Login form             |
| `/activities` |  ActivityScreen  | `<PrivateRoute/>` |      Form to create activity       |
|    `/rest`    |    RestScreen    | `<PrivateRoute/>` |       Form to set rest time        |
|   `/break`    | LargeBreakScreen | `<PrivateRoute/>` |    Form to set large break time    |
| `/timerWork`  |    TimerWork     | `<PrivateRoute/>` |    Shows counter for activities    |
| `/timerRest`  |    TimerRest     | `<PrivateRoute/>` |    Shows counter for rest time     |
| `/timerFinal` |    FinalTimer    | `<PrivateRoute/>` | Shows counter for large break time |

## Server / Backend

### Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true}
}
```

Activities model

```javascript
{
   title: {type: String, required: true},
   completion: {type: String, required: true},
}  
```

### API Endpoints

| HTTP Method |           URL            |        Request body         |                Description                |
| :---------: | :----------------------: | :-------------------------: | :---------------------------------------: |
|   `POST`    |      `/auth/signup`      |   `{username, password}`    | Checks if info exist and saves user to DB |
|   `POST`    |      `/auth/login`       |   `{username, password}`    | Checks if info exist and saves user to DB |
|    `GET`    |      `/auth/logout`      |                             | Logs out the user and destroy the session |
|    `GET`    |          `/me`           |                             |          Gets current user info           |
|   `POST`    |     `/api/activity`      | `{title, completion, rest}` |    Creates an activity and saves in DB    |
|    `GET`    |     `/api/activity`      |                             |         Shows all the activities          |
|   `POST`    | `/api/activities/delete` |                             |      Deletes all activities from DB       |

## Links

**Wireframes**

[Here](https://www.figma.com/file/F8bDlSbVS2Avq2Ol5W1L3Q/Work-Well?node-id=0%3A1) you can see the design I made on Figma to make this app.

