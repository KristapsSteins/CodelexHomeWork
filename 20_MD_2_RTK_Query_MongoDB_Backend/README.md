To run the Docker container, you will first need to pull the required image from Docker Hub using the following command:


`docker pull mongo`

This will download the latest version of the MongoDB image. You can check that the image has been downloaded successfully by running the following command:

`docker images`


This will display a list of all the images that are currently available on your system. You should see the mongo image listed.

Once you have the mongo image, you can start a container using the following command:

`docker run -d -p 27017:27017 --name mongodb mongo`

This will start a new container with the name mongodb using the mongo image. The -d flag tells Docker to run the container in the background, and the -p flag maps the container's port 27017 to the host's port 27017.

To start developing run `npm install` and then `npm run start:nodemon`
