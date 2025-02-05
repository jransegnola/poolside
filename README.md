Poolside Project

This is a simple project showing off the usage of multiple docker containers to present a website that pulls a message from an API backed by a Postgres database.  All necessary files are included, and the project can be run simply by using the 

```
docker-compose up 
```
command from the base folder.

This will start the necessary pods, seed the database, and expose the website on your localhost:8080 url.  Clicking the button on the page will pull the string "hello world" from the Postgres database and display it on the page.
