# Stay Hub

Stay Hub is a full-stack booking reservation application built with Next.js and MongoDB. It allows users to search for rooms, view room details, make reservations, and manage their profiles. The application also supports authentication, profile updates, and Stripe payments.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Next.js 14**
- **MongoDB**
- **React 18**
- **Redux Toolkit**
- **Bootstrap 5**
- **Cloudinary**
- **Stripe**

## Features

- Authentication with Next Auth
- Profile management (update profile, avatar upload)
- Search for rooms with pagination
- View room details
- Room reservation with Stripe payment
- Room reviews

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/stay-hub.git
cd stay-hub
npm install
```

## Environment Variables

Create a .env.local file in the root directory and add the following environment variables:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Running the Application

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

```bash
.DS_Store
.eslintrc.json
.gitignore
.next/
package.json
public/
README.md
src/
  app/
  components/
  controllers/
  helpers/
  lib/
  middlewares/
  models/
  redux/
  seed/
  services/
  utils/
tsconfig.json
types/
```

Scripts

- npm run dev: Runs the development server.
- npm run build: Builds the application for production.
- npm run start: Starts the production server.
- npm run lint: Runs ESLint to check for linting errors.
- # npm run seed: Seeds the database with initial data.
