# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Adding A Frontend

## Guidelines

### Part 1, Getting it all set up

This React project is the starter code for a frontend for the API you've been building. It depends on your API to be running.

It works via creating a proxy server to connect with your API. It expects all backend endpoints to be prefixed with the `/api` prefix. That's how React-Dev-Server can tell the difference between React routes on the frontend, and your API endpoints. Luckily, we've already set this up, so no backend changes should be needed.

Try running both projects at the same time and see if you can get your frontend talking to your backend! You will need to add `Route` components yourself to `App.js`, but some starter files have been added for you, to save you time. Make any changes to these files as you need. 

`npm start` or `npm run start` to run your frontend.


### Part 2, Setting up TypeScript for your project.

We're going to refactor this codebase to be a TS codebase!

To do this, follow the instructions in **TYPESCRIPT.md** before moving on.


### Part 3, Adding more components

Once you've got your Frontend talking to your Backend, time to add some features to your frontend to make it a nicer experience!

1. Add a `Navbar` so that you can navigate, and hook up both the `/` and `/pokemon` (equivalent) routes so that you can move between a home page and an index page. Your index page should show a list of nice cards.
2. Create a `ShowPokemon` (equivalent) component, so that when you click on a card it takes you to the ShowPokemon page that just shows a single pokemon. 


