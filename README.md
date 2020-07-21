# Boss Machine

The goal of this project was to create an API to serve information to a Boss Machine, a management application for entrepreneurs. In this project I created the routes (GET/PUT/POST/DELETE) in Express.js.

The Boss Machine tool allows users to:
- Create, view, update, and delete workers ('minions')
- Create, view, update, and delete new ideas ('million dollar ideas')
- Create, view, update, and delete meetings

I implemented following steps in this CodeCademy's project:
- Set up body-parsing middleware (`body-parser` packagae), CORS middleware (`cors` package) 
- Start the server listening on the provided `PORT` (process.env.PORT)
- Mount the `apiRouter` at `/api`. This router serves as the starting point for all API routes
- Routes live inside the **server** folder
- Create custom middleware function `checkMillionDollarIdea` that makes sure that any new or updated ideas are still worth at least one million dollars (**server/checkMillionDollarIdea.js**)

### Homepage
![Homepage](Homepage.png)

### Workers
![Workers](Workers.png)

### Add a new worker
![New workers](Add_new_worker.png)

### Add a new idea
![New Ideas](Add_new_ideas.png)


