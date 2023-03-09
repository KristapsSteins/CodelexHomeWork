# Express Typescript Boilerplate + MySQL

To run MySQL in Docker, follow these steps:


1.Run the following command in your terminal to create a MySQL container:


`docker run --name=mysql1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_ROOT_HOST=% -d mysql/mysql-server`


This command will create a container named mysql1 with MySQL installed and running. It will also map port 3306 of the container to port 3306 of your host machine.


2.Open a bash shell in the container by running:


`docker exec -it mysql1 bash`


3.Log in to MySQL by running:


`mysql -uroot -p`


Enter the password you set earlier (in this case, 123456).


4.Create a new database by running:


`CREATE DATABASE blog;`


5.Exit MySQL by typing \q and pressing Enter.


6.Exit the bash shell by typing exit and pressing Enter.


7.Change your directory to where the blog.sql file is located by running:


`cd /path/to/blog.sql`


8.Import the SQL file into the blog database by running:


`docker exec -i mysql1 mysql -uroot -p123456 blog < blog.sql`


This command will import the contents of the blog.sql file into the blog database.

**Start server by running:**


Run `npm install` and then `npm run start:nodemon`

