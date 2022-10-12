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

This is the test I received during my intership at MeU Solutions as a NodeJS intern.

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

_YOU CAN FOLLOW THE TUTORIAL HERE TO SKIP THE STEP 2 to step 7: https://hevodata.com/learn/docker-postgresql/_

2. After finishing setting up Docker Destop, open cmd and clone the postgreSQL image by run the command. 
  ```sh
   docker pull postgres
   ```

3. Clone the repo using the username : myusername with password: mypassword on port:5432.
   ```sh
   docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres
   ```
_Personally, I don't download PGAdmin, if you want, please refer to the tutorial link above to do so._

_After sucessfully running the docker container for the first time, next time, you can just open Docker desktop and run it again, note that the configuration will stay the same_

5. Pull pgAdmin image
  ```sh
   git clone https://github.com/Weslife2002/NodeJS-practice-.git
   ```

6. Run the container
  ```sh
   docker run --name my-pgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' -e 'PGADMIN_DEFAULT_PASSWORD=postgresmaster'-d dpage/pgadmin4
   ```
   
_Remember to adjust the PGADMIN_DEFAULT_EMAIL and the PGADMIN_DEFAULT_PASSWORD._

7. Access http://localhost:82/ and login using the PGADMIN_DEFAULT_EMAIL and PGADMIN_DEFAULT_PASSWORD.

8. Run the command below to get the IPAddress that the postgreSQL is running on.
  ```sh
   docker inspect postgresql -f "{{json .NetworkSettings.Networks }}"
   ```
8. Choose create new server and fill in the General and Connection tab. With the localhost is the IPAddress you found above, the username, the password and the port is what you set up on step 3. Also remember to fill in the database name, click save, if the pgAdmin sucessfully connect to the postgres database then you are good to go.

10. Clone the repo
   ```sh
   git clone https://github.com/Weslife2002/NodeJS-practice-.git
   ```
11. Clone the .env.example file, change its name to .env and redefine the config.
_For example above, I will configurate the .env file like this:_ 

   ```sh
    PGUSER= myusername
    PGHOST= 172.17.0.2
    PGPASSWORD= mypassword
    PGDATABASE= my-postgres
    PGPORT= 5432
    PORT= 3000
   ```

12. Install all the dependency.
   ```sh
   npm install
   ```
13. Run the project
   ```sh
   Node ./src/index.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>
