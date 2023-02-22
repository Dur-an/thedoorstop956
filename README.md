# thedoorstop956.com
Note from Jamey: config/config.env must be made per development environment. It is ignored by git as it will contain variables (keys, tokens, etc) that we may want to keep private.
You need a NODE_ENV=development (or production) and a PORT to run the server on.
Example config/config.env file:

    NODE_ENV=development
    PORT=5000

Next, make sure you run on your terminal `$ npm install` in the project directory once downloaded to get the dependencies.

Finally, run `$ npm run dev` which will run the server in development mode with nodemon.