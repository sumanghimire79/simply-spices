# HYF Final project for Class20 

## Setup instructions

Before you install the project make sure that you have installed NPM and YARN with the following versions:

```“yarn”: “= 1.19.1"```,  
```“node”: “= 17.3.0"```

Please run ```node -v``` and ```yarn -v``` and check if the versions match, if not then you will need to change them and make sure it matches the versions above.

Plus you should have installed **MySQL Workbench**, **Docker**, **VSCode** and **Postman** because we will use them over the project. Make sure that all of these applications are updated and running so that you save time before the project starts.

After the steps stated above you should be ready to install and set the project in your machine, please follow the steps by the stated order:

1. Git clone this project
2. Go to the project folder locally and run ```yarn``` - this command will install ```node_modules``` on the root of the project, on the ```packages/client``` and on ```packages/server```
3. To test the client you can run ```yarn workspace client start``` on the root of the project - it should open a browser with http://localhost:3000
4. To test storybook you can run ```yarn workspace client storybook``` on the root of the project - it should open a browser with http://localhost:6006/?path=/story/example-button--small
5. To test the server you will need to:
* set the ```.env``` file, please go to ```packages/server``` and run ```cp .env.example .env```
* start the docker container, please run ```docker compose up -d```
* Create the DB with data by running ```yarn db:setup``` which will run migrations and seeds
* Finally, run ```yarn dev``` to start the server in development mode.
* Check if the if a browser opens with http://localhost:5000/api/exampleResources
* And you should also test Swagger by opening http://localhost:5000/api/documentation

  
 
