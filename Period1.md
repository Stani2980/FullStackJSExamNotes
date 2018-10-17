## Period-1 Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript

#### Explain and Reflect:

- Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
    
>JavaScript is dynamicly typed, and is a functional scripting/programming language where you can use a function as a parameter. JavaScript is “the” scripting language to use in web development, where as Java is mostly used for backends, and IoT. Java is statically typed.
>Java needs to be compiled(to machine lang in the Virtual Machine), where as JavaScript is text based and does not need compilation.
>Java has block based scoping, where JS har function based scoping.

---
- Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
        
>JavaScript versions are way ahead of the versions that are supported in the browsers. But for the comfort of developers, and to use the new features of ES6+ES7, we can write these in development, then we can transpile the code to an elder version of JS(ES5), so that the elder browsers can run our code as well.
>Typescript is a superset of JS, that "lays on top" of ES6 and adds even more features, as stricter types, and interfaces, and as with Babel we can use Typescript to transpile the codebase into ES5, once again making til runnable in elder browsers.

---
- Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
        
>Node.js is a server-side platform, created on the Google Chrome V8 engine. It is a tool that allows us to make applications, not only for browser but also desktop, and other devices. It also allows us to do asynchronous functions in JS, using the event-loop.
>We also get to use `npm` witch gives us access to alot of premade JS code/modules. Npm is also a package manager, and holds version control over your added packages. 

---
- Explain about the Event Loop in Node.js

>JavaScript is a single threaded language, meaning that originally we could not preform async. requests. Thats where we use a web API, supplied by the V8 engine. This allows us to kick our async. functions over in a C++ code that executes them, and returns them when ready.
>The loop goes as so : 
>Func() enters the Call Stack in JS, if it is a async function, it will be sent to the web API, witch will execute the async code, then it will get sent to the call Queue, where it sits until the CallStack is empty and ready to execute the next task. 

---
- Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

>Babel is used when we want to transpile our JS code, into an older version. This is practical, because most modern browsers do not support the newest JS code, and we want our application to run in all browsers, and our development to be with the most modern tech. 
>Webpack ([webpack guide](https://webpack.js.org/guides/getting-started/)), is a bundler or "packaging tool", webpack allows us to compress our codebase to be as small as possible, because then our .js file will be smaller, thus faster to download/upload. The bundler also shortens variablenames and removes all spaces, making the code humanly undreadable, but still understandable for the computer.

*Coding example : BabelWebpack*

---
- Explain the purpose of “use strict” and Linters, exemplified with ESLint 
>Linting is the process of checking the source code for Programmatic as well as Stylistic errors. This is most helpful in identifying some common and uncommon mistakes that are made during coding. ESLint, helps developers, when coding by showing typing mistakes, and scoping errors and such, before runtime, and Throw them as errors or underline errors with red. This helps you to remember to define variables, and not trying to do things that are not possible, as setting a variable that is `readonly` to a new value. It also helps you to not use the reserved keywords of JS as variable names and such. JS modules that are exported in Node.js enviroment are automatically envoked as "use strict".

*Coding example: useStrict.js*

---

#### Explain using sufficient code examples the following features in JavaScript. 
- Variable/function-Hoisting
>Function declarations are completely hoisted ,but `var` declarations(NOT `const` and `let`) are also hoisted, but not assignments made with them. This meaning that all var declarations in your code and all function declarations will be lifted up and executed as the first thing in your code. And then afterwards when the code is executing the variables, and functions will be declared values.

*Coding example: hoisting.js*

---
- *this* in JavaScript and how it differs from what we know from Java/.net.
>*this* mainly points to the global object in JS. Where as in Java it point to the instance of the current object in question. When making objects/classes *this* points to that class. If a property function of a class takes a callback, that callback has to be binded to the object's "this" or using a arrow function witch under the hood binds *this*. Lexical scoping used by arrow functions is defined by inner functions scoping. Which means arrow functions work in classes/object.

*Coding example: this.js*

---
- Function Closures and the JavaScript Module Pattern
>The way that JavaScript works, we cannot make "real objects" thus we need to use closures. Functions enwraped in other functions have the scope pointing to their parent, thus we can "save" data that way inside an object.

*Coding example: closures.js*

---
- Immediately-Invoked Function Expressions (IIFE)
>Functions that will be imideatly executed, thus the content wont be available in the global scope, and variables inside wont be hoisted.

*Coding example: IIFE.js / closures_IIFE*

---
- JavaScripts Prototype
>Prototyping can be used to add new functions to existing Classes/Objects, such as Array or self made objects.

*Coding example: prototypes.js*

---
- User defined Callback Functions (writing your own functions that takes a callback)
>Functional programming witch allows us to create functions that run other functions

*Coding example: mapFilterReduce.js*

---
- Explain the methods map, filter and reduce
>The methods can be used to persist data, and get an altered array that has been modified on each of the elements of the original array. 
>The map method alters each of the elements and returns an equally sized array, where as the filter method filters it by a boolean condition, and returns an array containing objects which are fulfilling the boolean condition.
>The reduce method is used to accumulate list values into a single object, as shown in the example to count votes, and dynamically create an object for return containing the results.
>Map: creating tables/UL, update all objects.
>Filter: for filtering content in table, or UL.
>Reduce: accumulation of values in single object, like the .join() function "under the hood"

*Coding example: mapFilterReduce.js*

---
- Provide examples of user defined reusable modules implemented in Node.js

>We can split up our code in modules, making it easier to be multiple people working on a single project.

*Coding example: modules*

---

##### ES6-7 and TypeScript
---

- Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
>`let`: is the "goto" variable now, it is not hoisted, and has a block scope, to where is is declared.

>`()=>`: is a simple way of creating a function on the fly, with lexical scoping.

>`this`: is in coop with arrow func. cause it can some times cause problems.

>`f(...rest)`: rest params, can be used if you dont know how many params you will get in a function.

>deconstruction is usefull for splitting only the parts need from an object.

>map like know from other languages is a key value pair

>set a list of unique values, not limited to same datatype

*Coding example: ecmascript6Ex*

---
- Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
>The syntax has changed, and we can now deconstruct the imports

*Coding example: ecmascript6Ex*

---
- Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
>Class Based vs Prototype Based. Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class (one of its members). In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function.

*Coding example: ecmascript6Ex*

---
- Provide examples with es6, running in a browser, using Babel and Webpack

*Coding example: BabelWebpack*

[running example (surge)](http://mundane-ant.surge.sh/)

---

- Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

>Benefits of TS, are that we have type defenitions, and that prevents some errors and, makes development easier, introducing interfaces like we know them from other languages. Also the ability to make generics.

*Coding example: ts.ts*

---

##### Callbacks, Promises and async/await

- Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:
>Promises solves the problem that JS is single threaded and reads from top to bottom. Promises give us responsiveness that we really want in webdevelopment. Helps with HTTP request cause these take time. These work with the webAPI and using the Event Loop.
>Promises represents something that has to be resolved, but takes an uknown time to complete, then i either resolves to a result, or does not resolve and returns with an error.
---

- Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
>The callback hell/ pyramid of doom is referenced to the "ugly" looking code that it produces then you create code with functions depending on async returns from other functions. The way to handle that is to "nest" functions, and the more you nest the bigger the pyramid gets...

*Coding example: promises/pyramidOfDoomAndFix.js*

---
- Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
>The Promise api, allows us to execute code in parallel, then recieve the result in the same order in an list, as it was intended, so as the fuc call, takes as long as the longest of the promises.

*Coding example: promises/promisesSeqAndParallel.js*


---
- Example(s) that demonstrate how to implement our own promise-solutions.
>We can create "callback" style solutions where we can implement our own "homebrewn" Promises.

*Coding example: promises/promisesSeqAndParallel.js*

---
- Example(s) that demonstrate error handling with promises
>Error handling is easier, since we need one error handling point (catch(err){...} block)

*Coding example: promises/promiseFactory.js*

---

- Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
>Async/await is built ontop of the Promise API, condsidered as "syntactic sugar". It is a way to make async code look and behave a bit more like synchronous code (can fool you some times). It makes code easier to debug and the syntax is similar to other languages with try{..}catch{..}

- Provide examples to demonstrate 

*Coding example: promises/pyramidOfDoomAndFix.js*

---

- Why this often is the preferred way of handling promises
>Beacuse it is "easier" on the eyes, and as written above, more familier to developers that know real OOP languages.

*Coding example: promises/pyramidOfDoomAndFix.js*

---
- Error handling with async/await
>Error handling is more efficient as you can have only one try catch block like we are used to from other languages.

*Coding example: promises/pyramidOfDoomAndFix.js*

---

- Serial or parallel execution with async/await.
>Also easier implementation using the await keyword.

*Coding example: promises/serialParallelAsyncAwait.js*

---