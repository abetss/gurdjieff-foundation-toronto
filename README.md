
Yarn is the package manager for this project.

# Backend

## Run locally

#### Setup with local database
- Create a postgres database
- create a .env file and fill DEV_DATABASE_HOST, DEV_DATABASE_NAME, DEV_DATABASE_PASSWORD, DEV_DATABASE_PORTa and DEV_DATABASE_USERNAME with the postgress info
- Create a cloudinary account
- Fill the the .env file with CLOUDINARY_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET

#### Setup with prod database
- create a .env file and fill DEV_DATABASE_HOST, DEV_DATABASE_NAME, DEV_DATABASE_PASSWORD, DEV_DATABASE_PORTa and DEV_DATABASE_USERNAME with the postgress info
- Fill the the .env file with the prod CLOUDINARY_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET

From the backend directory run
`yarn develop`

## Deploying to heroku
From the root directory run
`git subtree push --prefix backend heroku master`

*Note: package.json.lock should be removed as it confused heroku deployment.*

**Heroku url:** https://gurdjieff-foundation-toronto.herokuapp.com

# Frontend

## Run locally with local strapi server

Set up **.env.development** with local strapi information (API_URL, IMAGE_BASE_URL)

From the **frontend** directory.

- Install packages by running `yarn`

- Run development by running `yarn develop`

Note: Make sure strapi server is running in your local machine

## Run locally with production strapi server

Set up **.env.staging** with local strapi information (API_URL, IMAGE_BASE_URL)

From the **frontend** directory.

- Install packages by running `yarn`

- Run development by running `yarn staging`

## Deploy gatsby to Netlify

Have your changes in the **release** branch. Push the **release** branch to github.

After **release** branch is updated, netlify starts building the frontend. It usually takes a few minutes before you can see the updates.

**Frontend url:** https://gurdjieff-toronto-foundation.netlify.app/
