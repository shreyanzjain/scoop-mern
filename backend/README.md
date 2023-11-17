## Backend

Folder structure:

```bash
├───backend/        # You are here
|   ├───methods/
|   ├───middlewares/
|   ├───prisma/
|   ├───routes/
|   ├───uploads/
|   ├───index.js
|   ├───package-lock.json
|   ├───package.js
|   └───README.md
├───frontend/
|   └───...
└───.gitignore
```

### Setting it up
#### Prerequisites for setting up the backend
 - Node.js v16.13.1 and higher
 - npm (node package manager)
 - PostgreSQL
 - A working internet connection

#### Please follow the section below, step-by-step.

In your cloned repository, cd into the backend folder by running:
```bash
cd backend
```

Install the necessary dependencies by running the command:

```bash
npm install
```

Now, create a ```.env``` file inside of the 'backend' folder within your cloned repository. Add these environment variables into it:

```
DATABASE_URL = "YOUR_POSTGRES_DB_CONNECTION_STRING"

JWT_SECRET_KEY = "YOUR_SECRET_KEY"
```

Your database connection string can be generated using this generic string. Just replace username, etc. with your credentials. Make sure to replace ```dbname``` and ```schema``` to the one that you want to use.

```json
"postgresql://username:password@localhost:5432/dbname?schema=public"
```

You can use any string of characters as a jwt secret key. Alternatively, you can refer to [this](https://stackoverflow.com/questions/52996555/generate-a-sufficient-secret-for-jwt-nodejs-lambda).

In the backend folder, run the command:
```bash
npx prisma migrate dev
```

When prompted for migration name, type a name that you like (I chose "0_init").

Now, start the server by running:
```bash
node index.js
```