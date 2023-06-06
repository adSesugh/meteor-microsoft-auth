#### Microsoft Sign page application Sign In

##### Steps
- Clone the repository
  - `git clone git@github.com:adSesugh/meteor-microsoft-auth.git`

- Make a copy of .env.example file and update value of the appropriate environment variable in the .env file 
  - `cp .env.example .env`
  - Note you can get clientId and authority values from [Microsoft Azure Portal](https://portal.azure.com) once your register your app.

- Run `meteor npm i` to install all dependencies


- To view the application in browser run `meteor run` and visit `http:localhost:3000`


[For More Information](https://www.npmjs.com/package/@azure/msal-react)