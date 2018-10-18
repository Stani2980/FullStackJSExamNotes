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
        > To ensure my application will work i would use PM2, a process manager that ensures that script is run when i restart server or the application crashes.

    - Ensure that you Node-process restarts after a server (Ubuntu) restart
        > To ensure my application will work i would use PM2, a process manager that ensures that script is run when i restart server or the application crashes.

    - Ensure that you can take advantage of a multi-core system
        > To ensure my application will work in a multicore system i could use the node native cluster module or i would use PM2, a process manager that creates the amount of processes my system can handle. 

    - Ensure that you can run “many” node-applications on a single droplet on the same port (80)
        > This i could configure with a loadbalancer, or using PM2.

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
    > We can do it as i have done, and use the hooks to remove all data from db, and reinstatiate it again before each test. Or we could use nock.js which overrites the Http request modules, and will only give us what we our selves programaticly have written as an response.

    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

### NoSQL, MongoDB and Mongoose
- Explain, generally, what is meant by a NoSQL database.
    > It is a type of database that does not use all the rules of the traditional relational modelling of tables and databases. This kind of database cannot be queried with SQL. These databases use embedding of data and often consist of repeated data. NoSQL databases do not use fixed schema structures and SQL joins.

- Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
    > The performance of such databases can be much faster, because the database does not handle joins, as a traditional database does, which are very time consuming. Though you have to query multiple times to get "foreign keys", but this can also be fixed by embedding, then you will only query one document and get all the info you need. These types of databases are also really good at handling modern features as location markers, and much greater scaleability.

- Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
    > The mongoose layer (ODM Object Document Mapper), gives us a type of "classical" schema, wich gives us some guidance in the code what an entity is built of. Mongoose also brings strongly types variables, so the data that we get and add to the database is consistent. It also allows us to query the database.

#### These two topics will be introduced in period-3
#### Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
#### Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere

- Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB
    > Demonstration is in the code example below

    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

- Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
    > The mongoose layer (ODM Object Document Mapper), gives us a type of "classical" schema, wich gives us some guidance in the code what an entity is built of. Mongoose also brings strongly types variables, so the data that we get and add to the database is consistent. It also allows us to query the database.

    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

- Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.
    
    - Favor embedding unless there is a compelling reason not to
    - The need to access an object on its own, is a compelling reason not to embed it
    - Arrays should not grow without bound. If there are more than a couple of
    hundred documents on the “many” side, don’t embed them; if there are more
    than a few thousand documents on the “many” side, don’t use an array of ObjectID references. High-cardinality arrays are a compelling reason not to
    embed.
    - Don’t be afraid of application-level joins: if you index correctly and use the
    projection specier
    (as shown in part 2) then application-level joins are barely more expensive than server-side joins in a relational database.
    - Consider the write/read ratio when denormalizing. A eld
    that will mostly be
    read and only seldom updated is a good candidate for denormalization
    - How you eventaully model your data depends – entirely – on your particular
    application’s data access patterns.


- Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization 
    > Position and job example.
    
    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example

- Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
    > 

    [miniproject](https://github.com/Stani2980/miniProjectJS) Code example