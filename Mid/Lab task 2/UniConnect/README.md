# UniConnect API — Lab Task 2

## Student Information
- **SL:** 11
- **Name:** Md. Naimur Rahman Saad
- **Student ID:** 23-51601-2
- **Section:** D

---

## Database Setup
1. Create a PostgreSQL database:
   ```sql
   CREATE DATABASE uniconnect;
   ```
2. Configure `.env` with your database credentials:
   ```env
   DB_CLIENT=postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=admin
   DB_DATABASE=uniconnect
   PORT=5001
   ```

3. Run TypeORM migrations:
   ```bash
   npm run migration:run
   ```

---

## Installation & Run Commands
```bash
# Install dependencies
npm install

# Run in development mode
npm run start:dev

# Run in production / compiled mode
npm run build
npm run start
```
- API Base URL: `http://localhost:5001`
- Swagger Docs: `http://localhost:5001/api`

---

## Endpoints

### 1. Users (`/users`)
- `POST /users` - Create a new user (password is hashed with Argon2)
- `GET /users` - Get all users (password hash excluded)
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user by ID
- `DELETE /users/:id` - Delete user by ID



### 2. Departments (`/departments`)
- `POST /departments` - Create a new department
- `GET /departments` - Get all departments
- `GET /departments/:id` - Get department by ID
- `PATCH /departments/:id` - Update department by ID
- `DELETE /departments/:id` - Delete department by ID



### 3. Academic Programs (`/academic-programs`)
- `POST /academic-programs` - Create an academic program
- `GET /academic-programs` - Get all academic programs
- `GET /academic-programs/:id` - Get academic program by ID
- `PATCH /academic-programs/:id` - Update academic program by ID
- `DELETE /academic-programs/:id` - Delete academic program by ID


