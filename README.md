## Getting Started

To start, run the development server using one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Route List

### This project has the following routes:

#### For non-logged users:
- `/`: The login page.

#### For admin role:
- `/dashboard`: The admin dashboard page for managing pokemons.
- `/dashboard/archive`: The page for admins to view archived pokemons.

#### For user role:
- `/pokemons`: The page for users to view all available pokemons created by admins.
- `/pokemons/:name`: The page to view detailed information about a specific pokemon.
- `/users`: The page to view all users/players.
- `/users/:name`: The page to view the caught pokemon list of a specific user.

## Requirements:

You can refer to the completed version [here](https://pokemon-dashboard-client.vercel.app) for guidance. Your task is to complete the functionality for the following routes:

- `/dashboard`: Add an archive button. It will trigger confirmation, and when the user confirms to archive the pokemon, it will send the pokemon to its own storage. Ensure that archived pokemons are not listed on the `/pokemons` page.
- `/dashboard/archive`: List all archived pokemons. Each pokemon will have an action button to unarchive it. Make sure it also triggers confirmation before unarchiving.
- `/pokemons/:name`: Add a catch button and store the caught pokemon in local storage. Prevent users from catching already caught pokemons.
- `/users`: List all users and add a navigation button to access each user's pokemon list.
- `/users/:name`: When a logged-in user views their own pokemon list, provide a release button. Make sure released pokemons no longer appear on the list.

## Credential List

### Admin:
- **Email:** johndoe@gmail.com
- **Password:** johndoe

### Users:
- **Email:** janedoe@gmail.com
- **Password:** janedoe
- **Email:** johnsmith@gmail.com
- **Password:** johnsmith
