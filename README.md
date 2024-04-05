# Adaca Assessment

## Dependencies

**[NodeJS](https://nodejs.org/en/)**

**[NPM](https://www.npmjs.com/get-npm)**

## Installation

Install the packages

```bash
npm install
```

Run the SQLite Migration

```bash
npx drizzle-kit push:sqlite --config=./src/configs/drizzle.config.ts
```

## Usage

To start the application.
```bash
npm run dev
```

## Testing

To run the test scripts

```bash
npm run test
```

## Endpoints
```bash
BASE URL -- http://localhost:3000/api/
GET -- /issues
GET -- /issues/:id
POST -- /issues
PUT -- /issues/:id
DELETE -- /issues/:id
```