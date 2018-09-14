# FullStackJSExamNotes
Notes and code pieces to use for the exam

## Period-1 Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript

#### Explain and Reflect:
- Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
    
>JavaScript is dynamicly typed, and is a functional scripting/programming language where you can use a function as a parameter. JavaScript is “the” scripting language to use in web development, where as Java is mostly used for backends, and IoT. Java is statically typed.
>Java needs to be compiled(to machine lang in the Virtual Machine), where as JavaScript is text based and does not need compilation.
>Java has block based scoping, where JS har function based scoping.

- Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
        
>JavaScript versions are way ahead of the versions that are supported in the browsers. But for the comfort of developers, and to use the new features of ES6+ES7, we can write these in development, then we can transpile the code to an elder version of JS(ES5), so that the elder browsers can run our code as well.
>Typescript is a superset of JS, that "lays on top" of ES6 and adds even more features, as stricter types, and interfaces, and as with Babel we can use Typescript to transpile the codebase into ES5, once again making til runnable in elder browsers.

- Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
        
>Node.js is a server-side platform, created on the Google Chrome V8 engine. It is a tool that allows us to make applications, not only for browser but also desktop, and other devices. It also allows us to do asynchronous functions in JS, using the event-loop.
>We also get to use `npm` witch gives us access to alot of premade JS code/modules. Npm is also a package manager, and holds version control over your added packages. 

- Explain about the Event Loop in Node.js

>JavaScript is a single threaded language, meaning that originally we could not preform async. requests. Thats where we use a web API, supplied by the V8 engine. This allows us to kick our async. functions over in a C++ code that executes them, and returns them when ready.
>The loop goes as so : 
>Func() enters the Call Stack in JS, if it is a async function, it will be sent to the web API, witch will execute the async code, then it will get sent to the call Queue, where it sits until the CallStack is empty and ready to execute the next task. 

- Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

>Babel is used when we want to transpile our JS code, into an older version. This is practical, because most modern browsers do not support the newest JS code, and we want our application to run in all browsers, and our development to be with the most modern tech. 
>Webpack ([webpack guide](https://webpack.js.org/guides/getting-started/)), is a bundler or "packaging tool", webpack allows us to compress our codebase to be as small as possible, because then our .js file will be smaller, thus faster to download/upload. The bundler also shortens variablenames and removes all spaces, making the code humanly undreadable, but still understandable for the computer.

- Explain the purpose of “use strict” and Linters, exemplified with ESLint 
