# FlightAndSearchService

A microservice for flight, city, and airport data — part of the airline booking system.

## Tech
- Node.js, Express 5
- MySQL with Sequelize and Sequelize CLI — models for cities, airports, airplanes, and flights
- Seeders for airports and airplanes

## API endpoints
Base path: `/api/v1`.

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/v1/city` | Create a city |
| GET | `/api/v1/city` | List all cities |
| GET | `/api/v1/city/:id` | Get a city |
| PATCH | `/api/v1/city/:id` | Update a city |
| DELETE | `/api/v1/city/:id` | Delete a city |
| POST | `/api/v1/flights` | Create a flight |
| GET | `/api/v1/flights` | List flights |
| GET | `/api/v1/flights/:id` | Get a flight |
| PATCH | `/api/v1/flights/:id` | Update a flight |
| POST | `/api/v1/airport` | Create an airport |

## How to run
```bash
npm install
cp .env.example .env   # PORT and MySQL settings
npx sequelize-cli db:migrate
npm start              # nodemon src/index
```

## License
MIT
