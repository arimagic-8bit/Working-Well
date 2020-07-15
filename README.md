# Working Well

### Description

Working Well is a responsive web app created to help people stay focused on their tasks or activities. To manage the working and rest time I will use the [Pomodoro technique]([https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro](https://es.wikipedia.org/wiki/Técnica_Pomodoro)). 

### How to use it?

**Back-end**

```js
$ git clone https://github.com/arimagic-8bit/Working-Well.git
$ npm i
$ npm run start:dev
```

**Front-end**



### User stories

**Signup**: As an anon I can sign up in the platform so that I can start using the app.

**Login**: As a user I can login to the platform so that I can start using the app.

**Logout**: As a user I can logout from the platform so no one else can use it.

**Set task/activity**: As a user I can create a task or activity I want to focus on and set my working and rest time.

**Edit activity**: As a user I can edit a task or activity before starting working on it

**Delete activity**: As a user I can delete an activity before starting working on it

### Backlog

- Add relaxing music when doing the task/activity.
- Add different time managing techniques that the user can choose. 

## Client/Frontend

### React Router Routes

`<Route>` = allows anyone to see the page.

`<PublicRoute>` = allows unauthenticated users to see the page.

`<PrivateRoute>` = allows only authenticated users to see the page.

|    Path     |  Component  |    Permissions    |                Description                 |
| :---------: | :---------: | :---------------: | :----------------------------------------: |
|     `/`     | SplashPage  |    `<Route/>`     |      Home page with info about he app      |
|  `/signup`  | SignupPage  | `<PublicRoute/>`  |                Signup form                 |
|  `/login`   |  LoginPage  | `<PublicRoute/>`  |                 Login form                 |
| `/settings` | SettingPage | `<PrivateRoute/>` |  Setup activities, working and rest time   |
|  `/timer`   |  TimerPage  | `<PrivateRoute/>` | Shows a counter for each activity or break |

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
   completion: {type: Number, required: true},
   rest:{type: Number, required: true}
}  
```

### API Endpoints

| HTTP Method |            URL             |        Request body         | Status | Error |                Description                |
| :---------: | :------------------------: | :-------------------------: | :----: | ----- | :---------------------------------------: |
|   `POST`    |       `/auth/signup`       |   `{username, password}`    |  201   |       | Checks if info exist and saves user to DB |
|   `POST`    |       `/auth/login`        |   `{username, password}`    |  200   |       | Checks if info exist and saves user to DB |
|    `GET`    |       `/auth/logout`       |                             |  204   |       | Logs out the user and destroy the session |
|    `GET`    |           `/me`            |                             |  200   |       |          Gets current user info           |
|   `POST`    |      `/api/activity`       | `{title, completion, rest}` |  201   | 500   |    Creates an activity and saves in DB    |
|    `GET`    |      `/api/activity`       |                             |  200   | 500   |         Shows all the activities          |
|    `PUT`    |    `/api/activity/:id`     | `{title, completion, rest}` |  200   | 500   |          Edits and activity info          |
|   `POST`    | `/api/activity/:id/delete` |                             |  200   | 500   |       Deletes one activity from DB        |
|   `POST`    |     `/api/activities`      |                             |  200   | 500   |      Deletes all activities from DB       |

## Links

**Wireframes**

[Here](https://www.figma.com/file/F8bDlSbVS2Avq2Ol5W1L3Q/Work-Well?node-id=0%3A1) you can see the design I made on Figma to make this app.