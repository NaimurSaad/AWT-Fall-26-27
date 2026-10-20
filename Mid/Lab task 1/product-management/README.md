# Product Management API

## Student Information
- **SL:** 11
- **Name:** Md. Naimur Rahman Saad
- **Student ID:** 23-51601-2
- **Section:** D

---

## Database Setup
1. Create a PostgreSQL database:
   ```sql
   CREATE DATABASE product_management;
   ```
2. Copy `.env.example` to `.env` and set your database credentials:
   ```env
   DB_CLIENT=postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_DATABASE=product_management
   PORT=5001
   ```
3. Run migrations:
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
```
- API Base URL: `http://localhost:5001`
- Swagger Docs: `http://localhost:5001/api`

---

## Endpoints

### Products
- `POST /products` - Create a product
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `PATCH /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

### Employees
- `POST /employees` - Create an employee
- `GET /employees` - Get all employees
- `GET /employees/:id` - Get employee by ID
- `PATCH /employees/:id` - Update an employee
- `DELETE /employees/:id` - Delete an employee
