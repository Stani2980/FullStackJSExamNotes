# Period-2 Node.js, Express + JavaScript Backend Testing, NoSQL, MongoDB and Mongoose

## *All of the answers below can use the [miniproject](https://github.com/Stani2980/miniProjectJS) as coding examples*


- Why would you consider a Scripting Language as JavaScript as your Backend Platform?
    > Most if not all will use JavaScript to make their web app dynamic, or will just code the entire thing in React/Angular.js/Vue Javascript, so why not code the backend in the same language...? This saves both employees, and confusion. The backend frameworks as express.js are also highly scalable, considering that JS is single threaded, so you could have an instance running per core of the server device.

- Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat
    > The pros would be the same as above, that you have the entire application in the same language. The scaleability of Node.js + Express is also remarkably easy. And the objects you will be sending back and fourth (JSON),will directly work with JS, but will demand some work before being Java objects. Java/JAX-RS/Tomcat is better for CPU intensive applications, and large enterprise applications. Java also gives you an IDE to work with which include debugging and static type checking (things that can be added to JS via libraries).
    
- Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.
 > We could use the native cluster function that will use all the cores available on the system, and handle restart on crashes. This is called a loadbalancer, and will create an instance per available core of the system that runs the application. (We can also use a processmanager like PM2)

- Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

    - Ensure that you Node-process restarts after a (potential) exception that closed the application
        > 

    - Ensure that you Node-process restarts after a server (Ubuntu) restart
        > 

    - Ensure that you can take advantage of a multi-core system
        > 

    - Ensure that you can run “many” node-applications on a single droplet on the same port (80)
        > 

- Explain the difference between “Developer outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code, 
    > Developer outputs, would be Stacktrace and technical stuff that the user/customer does not need or want to see. Where as application logging, would be som relevant logging of what is happening in our application, if an fatal error killed our application we want to know, and investigate and fix the bug. This could be done with debug.js library. The fault with the console.log() statements is, that they are not saved on the server, thus a server restart would delete them all. + it is more to use in the browser.

- Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages 
    > We test via using Mocha test library, and Chai assertion library. Then using async/await and using node-fetch library to handle HTTP requests.
    
    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

- Explain, using relevant examples, the Express concept; middleware.
    > Middlewares, are "functions" that will be run every time our Express backend recieves a HTTP request. These can be used to change the body to json, or to check user rights, or you name it... (important that they are in the order you want them executed)
    
    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

- Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.
    > We could use middleware to create a regular session cookie, which we will send back and fourth. There is also the option to use jwt tokens to handle sessions, if we have a REST api, this would be prefered, because it is not sure that we land at the same server as we did with the previous request(statelessness).

- Explain (conceptually) how you would handle sessions if you run your app in clusters to solve some of problems related to deployment.
    > We could do what is written above, to send the session or jwt token with each request, or we could handle by saving the sessions in an other server(db), then fetch the session object when we request a node service.
    
- Compare the express strategy toward (server side) templating with the one you used with Java on second semester.
    > The strategy is more or less the same, JSP and EJS, look very similar. The idea is the same, you have HTML with embedded JavaScript, or with other tech like .pug you have an other syntax for your HTML as well and embedded JS, but under the hood the .pug is also just HTML.

- Demonstrate a simple Server Side Rendering example using a technology of your own choice.
    > 

- Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using for example the Request package.
    > We implement a REST api via middlewares and routes in the express environment. Then we can use a http library as request or node-fetch to simulate http requests in Mocha tests.

    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

- Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
    > We use Mocha a testing library, and we use Chai an assertion library, to perform test. The asynchronous tests, are created via async/await keywords(Promises).

    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

- Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.
    > 

### NoSQL, MongoDB and Mongoose
- Explain, generally, what is meant by a NoSQL database.
    >

- Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
    > 

- Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
    > 

#### These two topics will be introduced in period-3
#### Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
#### Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere

- Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB
    > 

- Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
    > 

- Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.
    > 

- Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization 
    > 

- Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
    > 