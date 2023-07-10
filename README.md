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
Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.In the case of Express.js, middleware functions are used to add additional functionality to your application's HTTP request handling</br>
Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.</br>
mongodb is connected to upload and retrieve AI generated images in the form of string.</br>
from the backend, there are 2 routes, post-route which uploads, retrieves data from mongoDB and cloudinary and dall-e-route which generates ai-images with the help of api.</br>
Cloudinary: Cloudinary's Node. js SDK provides simple, yet comprehensive image and video upload, transformation, optimization, and delivery capabilities that you can implement using code. Basically, we use it to store images because it's faster!</br>



