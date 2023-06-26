# Joe Choo-Choy's Capstone Project
# EasyPrompt (V2!)

## TODO LIST
- [ ] Example TODO
- [X] Example DONE

### User Profile

Anyone who wishes to use an LLM will enjoy using this app.

The app will be especially useful to those who wish to use an LLM to generate text with a certain format, e.g. code, letters, emails, etc., or for a peculiar purpose requiring complicated instructions, e.g. answering multiple-choice questions, impersonating someone, summarising text, writing abstracts or outlines, etc.

The app could also be useful to prompt engineers or researchers who want to be able to systematically test prompting procedures on different benchmark tests, and save and categorise those prompts.

Users will create prompt text to be prepended to or wrapped around queries sent to an OpenAI LLM of their choice. Users create this prompt text by creating Prompts, the core construct of this app. The other core constructs of the app are Seqs, Tasks, and Evals. Prompts will be bundled together in re-arrangeable sequences called Seqs, and multiple Seqs for a given Task can be tested in an Eval. Prompts, Seqs, Tasks, and Evals can be managed and categorised for ease of analysis.

### Features

- Create, edit and delete Prompts.
- Generate text from OpenAI LLMs using Prompts.
- Compose and (re)arrange Prompts into Seqs.
- Define Tasks by sets of queries.
- Associate Seqs with Tasks.
- Evaluate sets of generations for a given Task and Seq.
- Compare multiple Seqs for a given Task by Eval results.
- Log in to save or retrieve Prompts, Tasks, and Evals.

### Tech Stack

- React
- React Router
- Express
- Axios
- OpenAI
- MySQL
- Knex
- ...

### APIs

LLM generations will be produced by requests to the OpenAI API. The user will be able to change the parameters of the request to change the type of LLM, sampling temperature, and more.

The app will also use its own API to read from and write to a database of user information, EasyPrompts, EasyTasks, and so on.

## Implementation

### Sitemap

- Homepage
    - Sitemap
    - Log-in panel / User information
- About
    - Intro to core concepts
    - How to use the site
- Sandbox
- Prompts
    - Browse and edit Prompts. Compose Prompts into Seqs.
- Tasks
    - Browse and edit Tasks.
- Evals
    - Evaluate Seqs for a given Task. View Eval results to see the best Seqs.

### Mockups

**TODO**

### Endpoints

- POST /prompts
    - Creates a Prompt object and adds it to the stored array of Prompts.
    - Request: { name, prompt, task, position }
    - Response: Response: { id, name, prompt, task_id, position, created_at, last_updated_at, created_by }
    
- GET /prompts
    - Gets the stored array of Prompt objects.
    - Response: [{ id, name, prompt, task, position, created_at, last_updated_at, created_by }, ...]
    
- PUT /prompts/:promptID
    - Update a Prompt's name, prompt, task, or position in the Prompt database.
    - Request: { name: new_name || prompt: new_prompt || task: new_task || position: new_position }
    - Response: { id, name, prompt, task_id, position, created_at, last_updated_at, created_by }
    
- DELETE /prompts/:promptID
    - Deletes the Prompt with specified ID.
    - Response: { id, name, prompt, task_id, position, created_at, last_updated_at, created_by }
    
- POST /tasks
    - Creates a Task object and adds it to the stored array of Tasks.
    - Request: { name, query }
    - Response: { id, name, query, created_at, last_updated_at, created_by }

- GET /tasks
    - Gets the stored array of Task objects.
    - Response: [{ id, name, query, created_at, last_updated_at, created_by }, ...]
    
- PUT /tasks/:taskID
    - Update a Task's name, prompt, task, or position in the Task database.
    - Request: { name: new_name || query: new_query }
    - Response: { id, name, query, created_at, last_updated_at, created_by }

- DELETE /tasks/:taskID
    - Deletes the Task with specified ID.
    - Response: { id, name, query, created_at, last_updated_at, created_by }

**TODO:**
- Eval endpoints: ?
- User endpoints: POST, GET by ID

### Database

- TABLE: Prompts
    - FIELDS: id (1ary key), name, prompt, task_id (foreign key), position, created_at, last_updated_at, created_by
- TABLE: Tasks
    - FIELDS: id (1ary key), name, query, created_at, last_updated_at, created_by
- TABLE: Evals
    - FIELDS: **TODO**
- TABLE: Users
    - FIELDS: id (1ary key), username, password, role, created_at, last_updated_at
- JOIN TABLES...?

### Auth

Yes, users will be able to play in the sandbox without logging in but will need to login in order to save Prompts, Tasks, etc. User information will be stored in a database and logins will be authenticated.

## Roadmap

[Wed14th > Fri16th]: Finalise design, create database schemas, create database seed, create basic front-end with all pages and forms, connect OpenAPI API, create API codebase with routes/endpoints. 
**OVERALL GOAL: GET SANDBOX PAGE WORKING.**

[Fri16th > Mon19th]: Write all B-E Express/Knex functions, write all F-E Axios calls, create log-in functionality sans security, create format to display prompts and tasks.
**OVERALL GOAL: GET PROMPTS PAGE WORKING.**

[Mon19th > Wed21st]: Link prompts with seqs, queries with tasks, and evals with prompts and tasks; create edit functionality for prompts and tasks.
**OVERALL GOAL: GET TASKS PAGE WORKING.**

[Wed21st > Fri23rd]: Figure out how to make a couple of charts of evaluation results, add categorisation functionality to prompts and tasks to structure the evals.
**OVERALL GOAL: GET EVALS PAGE WORKING.**

[Fri23rd > Wed28th]: Complete front-end, authorisation, nice-to-haves, About page, ... 
**OVERALL GOAL: GET FRONT-END LOOKING GOOD.**

AND MUCH MORE...

## Nice-to-haves

**TODO**








