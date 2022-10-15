# Nodejs Practice Test

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-test">About The Test</a>
      <ul>
        <li><a href="#workflow">Workflow</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Test

This is the test I received during my intership at MeU Solutions as a NodeJS intern. In this practice test, I need to write 3 APIs (Create, Update, Delete) using PostgreSQL as the database. 

<p align="right">(<a href="#top">back to top</a>)</p>

### Workflow

This section should list the workflow of the project.

* Setup Docker in Windows.
* Setup PostgreSQL environment using docker.
* Connect to the PostgreSQL database by NodeJS.
* Create APIs for create, update, delete users.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/tools in the project.

* NodeJS
* ExpressJS 
* WSL2 for Windows
* docker
* PostgreSQL

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.

### Prerequisites

If you use windows like me, you need to setup WSL2 before this step, if you use linux, you can skip that.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Set up Docker for windows.
Please refer to this link for more details on setting up Docker on windows https://docs.docker.com/desktop/install/windows-install/.

_You can setup PostgreSQL using docker yourself by following this tutorial: https://hevodata.com/learn/docker-postgresql/_

2. After finishing setting up Docker Destop, open cmd and clone the postgreSQL image by run the command. 
  ```sh
   docker pull postgres
   ```

3. Clone the repo using the password: yourpassword on port:5432 with name: postgres.
   ```sh
   docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres
   ```
_Personally, I don't download PGAdmin, if you want, please refer to the tutorial link above to do so._

_After sucessfully running the docker container for the first time, next time, you can just open Docker desktop and run it again, note that the configuration will stay the same_

4. Start the postgres script mode by running the command: 
  ```sh
   docker exec -ti -u postgres postgres psql
   ```
   
5. Create new database: nodedemo 
  ```sh
   CREATE DATABASE nodedemo
   ```
6. Clone the repo
   ```sh
   git clone https://github.com/Weslife2002/NodeJS-practice-.git
   ```
7. Clone the .env.example file, change its name to .env and redefine the config.
_For example above, I will configurate the .env file like this:_ 

   ```sh
    PGUSER= postgres
    PGHOST= localhost
    PGPASSWORD= yourpassword
    PGDATABASE= nodedemo
    PGPORT= 5432
    PORT= 3000
   ```

8. Install all the dependency.
   ```sh
   npm install
   ```
9. Run the project
   ```sh
    npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>
