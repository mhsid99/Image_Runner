# Image_Runner

Image Runner is a FullStack responsive MERN Social media application which uses OpenAI API.<br/>
• Users can generate their own imaginative image by typing a phrase and a image will be generated according to the phrase. If not sure what to type, they can use ‘Surprise me’ feature which generates a phrase as well.<br/>
• Users can share the generated images in the community which is displayed on the homepage. They can also search for the image, view the user and the phrase and also download the image locally on their system.<br/>
• Uses MongoDB as the database which stores user information.<br/>
• Uses Cloudinary: a cloud-based image storing service to make image load speed faster

# Working Demo: 
https://image-runner.netlify.app/

#Working

so the app is divided into 2 parts, frontend and backend.<br/>
<h2>Frontend</h2></br>
the frontend is on react which is created using vite instead of creat-react-app.</br>
css is built on tailwind framework, most popular one for css</br>
we need to save the files generated to our local machine, hence file-saver is installed</br>
Routing is an essential technique for navigation among pages on a website based on user requests and actions, hence for that purpose, we will use react-router-dom. The primary functionality of react-router-dom is implementing dynamic routing in web applications and supports component-based routing.</br>
The apps functionality is created into components which are built separately, for e.g. this app has a 'card' for displaying  images, 'form' for storing information
etc..</br>
React state hooks are used in multiple places, for example to change the state of the data, if it is loading or not, so we can display the loader, searchbar is empty or not, for autofilling purposes and form for taking in and storing data</br>
the app consists of 2 pages, 'home', where all the data is renderd in a card format and 'createPost', where the image is generated.</br>
The entire frontend is stored in `Client` folder</br>
</br>
<h2>Backend</h2>
We will use the nodemon package to make sure that the backend is always running.</br>
installing packages for backend: Cloudinary, cors, dotenv, express, mongoose, nodemon, openai.</br>
Dotenv is used to get all the environment variables from the `.env` file which contains all api keys and values</br>
Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and makes it easier to organize your application’s functionality with middleware and routing.</br>


