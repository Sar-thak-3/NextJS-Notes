# What is Next JS?
React Framework for Production. Package that uses React for building user interfaces. Loaded with lot more featurres that enable you to build full fledged production ready applications.

- No need to install packages, everything inside it!
- simplifies process of building react application for production
- File based routing
- Pre-rendering - generated html for each page for each page in advance instead of doing it at client side. Server-side rendering so decrease pressure on client side
|>>>>><<<<<|   In react js everything is rendered on client side
    - Static Generation - Generated at build time and will be reused on each request
    - Server side rendering - HTML generated on each request at server side
- SEO Optimization. Static site generation
- Automatic code splitting - Automatically splits code into smaller chunks, making it easier to load and reducing the time it takes to load the site.
- API routes - Can create APIs with Nextjs
- Support for CSS modules
- Authentication - Support various authentication system
- Dev and Prod build system

# How does CDN works?
Content Deleivery network is a network of servers linked together to deleiver content. These servers are created at midways and our site are cached at these servers to be accessible fast and securely.

# Folder Structure
Scripts in package.json
- dev - Runs our next js application in development mode with hot code reloading and other loading
- build - compiles our next js applications and prepares for production deployement
- start - compiled application in production mode
- lint - links all files in your application

> next.config.js  file in directory - next js configuration file. Have react strict mode = True means highlighting problems in application

> .eslintrc - configuration file for eslint

> .next folder - next js application is served from here

> node_modules - all dependencies installed here

> styles folder - for all styles

> public folder - all public files

> pages folder - all pages of the website

* Code inside `app/layout.tsx` works for entire application
* Next JS already have many things pre-defined like loading.tsx named file will be rendered for short time till complete page is rendered. This thing already defined in NEXT.JS you only need to create loading.tsx file

# Flow of Control of APP
1. npm run dev
2. execution transferred to _app.js. MyApp component is render which contains components defined in index.js
3. This is how we see index.js page in Web Page

# Routing in Next.js app
* File-system based routing mechanism
* When a file is added to pages folder in a project, it automatically becomes available as a route
* By mixing and matching file names with nested folder structure, it is possible to pretty much define the most common routing patterns

# Routing features
* The landing page should be in pages directory with name `index.js`. There is predefined functionality in NextJS to render index.js as landing page

* Name inside function dosen't matter the file name will be the url for the page.

* Files get automatically routed in NEXT.JS

* Dynamic Routing - create file using `[param].js` and param will be the query and the page will act as dynamic page

* What to do for `https://localhost:3000/product/1/review/1`

    Make structure as shown in hello-world project of next.JS

## CATCH ALL ROUTES

[...params] will direct you to same page no matter how many params will be there, and all params can be accessed using useRouter().query

| Next.JS  | React.JS |
| ------------- | ------------- |
| Whole HTML document is rendered to client side in Next.JS  | No html content is sent to client side in React app  |
| By default, NEXT.JS pre-renders every page in the application | While react renders and convert every page to HTML in client side only |

## What does pre-renders means?
Converting the entire page to HTML on server side and then send to client side/browser.

### Why pre-renders?
1. Pre-render improves performance
In react you need to wait for javascript to be executed 
This is wait time for user
2. It helps Search Engine Optimization
With react app, if the search engine hits you page, it only sees div tag with id equal to root.
If SEO is concern, pre-rendering is most important.

## Next js support two kinds of pre-rendering:-

1. Static Generation - Pages generated at build time. Generated in advance when you build your application. Recommended method to pre-render pages whenever possible. Pages are generated and cached.

How?
By default NEXT.js pre-renders every page. 

Prod server- An optimized build is created once and you deploy that build. You don't make code changes on the go once it deployed.

Dev server - We should make changes in our code and we want that code to immediately reflect in browser.

for production builds, a page will be pre-rendered once when we run the build command.

In development mode, the page is pre-rendered for every request you make.

# General Conventions
Any dynamic or routing file is created in components folder.

* *Prefer component based architectire*

## Some importantnt things
1.
* getStaticprops only runs on server side
* function will never run client-side
code inside getStaticprops will not sent with JS bundle that is sent to browser.

2. 
* you can write server side code directly in getStaticprops
* accessing file system using fs module or quering a database can be done inside getStaticprops
* you don't have to worry about including API keys in staticProps as that won't make it to the browser.

3.
* getStaticProps is allowed only in page and cannot run from regular component file
* used for pre-rendering and not client side data fetching

4. 
* getStaticProps returns an object and object should contain a props key which is an object

5. 
* getStaticProps will run at build time
* <u>During development, getStaticProps runs on every request</u>


|Route (pages)            |                   Size   |  First Load JS |
|-------------------------|--------------------------|----------------|
|┌ ○ /                    |                   421 B  |        76.7 kB | 
|├   /_app                |                   0 B    |        73.9 kB |
|├ ○ /404                 |                   269 B  |        74.1 kB |
|├ ○ /about               |                   253 B  |        74.1 kB |
|├ ○ /blog                |                   254 B  |        74.1 kB |
|├ ○ /blog/first          |                   263 B  |        74.1 kB |

* Size refers to the size of assests downlaoded while navigating page

* First load js refers to size of assests downloaded from server while navigating page

* First load size is size of global variables of each page
* First load js size = First load JS shared by all + size

|+ First Load JS shared by all              | 74.6 kB
|-------------------------------------------|---------|
|  ├ chunks/framework-2c79e2a64abdb08b.js   | 45.2 kB
|  ├ chunks/main-9c8fd354a6242c23.js        | 27.6 kB
|  ├ chunks/pages/_app-2dfd096757008a0f.js  | 297 B
|  ├ chunks/webpack-8fa1640cc84ba8fe.js     | 750 B
|  └ css/876d048b5dab7c28.css               | 706 B

* All size here are downloaded irrespective of which page you hit

* ○ -> static page
* ● -> dynamic page -> use static state generation 

* As there is no routing from index page to users page so browser didn't downloaded it initially when complete app is rendered. If there is link to users page somewhere in app directly then it will be rendered at same time

* When we type url then `/users` page is downloaded.

* When page with getStaticProps is pre-rendered at build time, in addition to the page HTML file, Next.JS generates a JSON file holding the result of running getStaticProps.
NextJs fetched JSON file and uses it as the props to create the page component client-side.

<a href="D:\Web Dev\NextJS\ssg.png" ></a>

<br/>

## Error: getStaticPaths is required for dynamic SSG pages and is missing for '/posts/[postId]'
* This error means that to render staticPaths you need to specify the limits of postId what it should be so that no extra postId would be rendered.
* To solve this we defined getStaticPaths in [postId].js with number for which we want postId

* With help of this getStaticPaths and getStaticProps we are converting dynamic pages to static pages. E.g- for 100 api calls 100 static pages created while buidling app.

`STATIC GENERATION`
* fallback key in getStaticPaths is necessary and accept:-

<h3><u> fallback: false </u></h3>

* paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
* Also during this any paths not returned by getStaticPaths will result in a 404 page
* Good practice if pages are not added often.
* Blog site with few articles.

<h3><u> fallback: true </u></h3>

*  paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
* paths that have not generated at build time will not result in 404 page. Instead Next.JS will serve a "fallback" version of page on the first request to such a path
* In background nextjs will statically generate requested path HTML and JSON. This includes running getStaticProps.
* When that's done, browser receives JSON for generated path. This will be used to automatically render the page with required props. From user's perspective, the page will be swapped from the fallback page to full page.
* Also next.js keeps track of list of pre-rendered pages for next time
* notfound: true -> gives 404 page

<u><h3> fallback: blocking </u></h3>

* paths returned from getStaticpaths will be rendered to HTML at build time by getStaticProps
* paths that have not generated at build time will not result in 404 page. Instead Next.JS will serve a "fallback" version of page on the first request to such a path
* When that's done, browser receives JSON for generated path. This will be used to automatically render the page with required props. From user's perspective, the page will be swapped from the fallback page to full page and not show loading page meanwhile
* Use it when on UX level, somtimes people prefer the page to be loaded without loading indicator if wait time is a few milliseconds. This helps avoid layout swift.

`ISSUES WITH BUILD TIME`
* Page take 100ms to build. So app with 100 pages take 10s to build. App with 100000 products take > 2.5hrs.

* As the static pages are generated, so if data updated they can't update it on the pages.

## So ISR (Incremental Static Generation) is used.
* ISR allows you to update static pages after you've build your application. Statically generate individual pages without need to rebuild complete app.
specify revalidate key. Value for revalidate is the number of seconds after which a page re-generation can occur.

* rE-generation initiated only if user makes request after revalidate time.

## Problems with Static Generation
* Not being able to fetch data per request, stale data problem
* if content is very dynamic on app, getStaticProps fetch news of build time which is not suitable at all.
* ISR can help but if revalidate is 1s we still might not always see the most up to date data
* rather fetch data on client side
by making request from the component. But no SEO.

# Server-side Rendering
* Allows pre-render a page not at build time but at request time. 
HTML is generated for each request.
* This kind of pre-rendering is slower than static generation.
* Write code directly in getServerSideProps
* Don't worry about API call in ststicServerSideProps
* Not used for client side data fetching
* run at request time.

> λ -> Server side rendering

### * No page is generated at building app, it will generate app at request

<br>

# Client-side Data Fetching
* Data is never pre-rendered and render at the time of client side. Everything in client side is similar as React side.


* Sometimes one more thing is done both Server-side rendering and client side rendering to maintain URL functionality and improve SEO at same time.
 
> Go through event.js in hello-world app



<br><br><br><br><br><br>

## Error Handling within the page!
Just create `error.tsx` and it will work when there will be error in any particular page

# Fetch API in Next.JS
* Nextjs automatically dedupe requests in a tree
* Use loading UI, Streaming and Suspense to progressively render and show a result to the user while the rest of the content loads.

> "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],

This file extensions can be created in directory of app to define any global thing, directly <b><u>without even importing</u></b>

# Favicon of App
Just simply add any favicon to app folder you want to set as Icon to app and rename it as `favicon.ico` . 

*HURRAY DONE*

## *If there is any error with any url of app, then nextJs automatically keeps calling it every particular time to ensure if issue got corrected it will render the url.*

