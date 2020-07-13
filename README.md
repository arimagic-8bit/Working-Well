# Working Well

### Description

Working Well is a responsive web app created to help people stay focused on their tasks or activities. To manage the working and rest time I will use the [Pomodoro technique]([https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro](https://es.wikipedia.org/wiki/Técnica_Pomodoro)). 

### User stories

**Signup**: As an anon I can sign up in the platform so that I can start using the app.

**Login**: As a user I can login to the platform so that I can start using the app.

**Logout**: As a user I can logout from the platform so no one else can use it.

**Set task/activity**: As a user I can create a task or activity I want to focus on and set my working and rest time.

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
  tasks:  [
      {
          title: {type: String, required: true},
          completion: {type: Number, required: true},
          rest:{type: Number, required: true}
      },
    ],
   longBreak: {type: Number, required: true},
}  
```

### API Endpoints

| HTTP Method |      URL       |      Request body      | Status | Error |                Description                |
| :---------: | :------------: | :--------------------: | :----: | ----- | :---------------------------------------: |
|   `POST`    | `/auth/signup` | `{username, password}` |  201   |       | Checks if info exist and saves user to DB |
|   `POST`    | `/auth/login`  | `{username, password}` |  200   |       | Checks if info exist and saves user to DB |
|   `POST`    | `/auth/logout` |                        |  204   |       | Logs out the user and destroy the session |
|   `POST`    |  `/activity`   |  `{tasks, longBreak}`  |  204   |       |    Creates an activity and saves in DB    |
|    `GET`    |  `/activity`   |                        |  204   |       |         Shows all the activities          |

## Links