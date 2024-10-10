# Link Sharing App

[Live Demo](https://link-share-livid.vercel.app/)

## Overview

This is a **Link Sharing App** built with **Next.js** for full-stack development, **Tailwind CSS** for styling, and **Context API** for global state management. The app enables users to share links easily, manage user authentication through **GitHub OAuth**, and store data in a **PostgreSQL** database. **Cloudinary** is used for image storage and manipulation.

## Features

- User authentication via GitHub OAuth.
- Share and store links with ease.
- Cloud-based image handling with Cloudinary.
- Secure data management using PostgreSQL.
- Fully responsive design with Tailwind CSS.
- Real-time updates using Context API for state management.

## Technologies Used

- **Next.js** (Full Stack)
- **Tailwind CSS** (Styling)
- **Context API** (Global State Management)
- **NextAuth** (Authentication)
- **Axios** (Data Fetching)
- **Cloudinary** (Image Storage)
- **PostgreSQL** (Database)

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository and Navigate to Project Directory

```bash
git clone https://github.com/sajjad-mugdho/link_share.git
cd link_share
```

### 2. Install Dependencies

```bash

You can use either npm or yarn to install the dependencies:

For npm:

npm install

Or, for yarn:

yarn install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory of the project and add the following environment variables. You can also create the file using the following commands:

```bash
# Environment configuration
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# GitHub OAuth credentials
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Database connection URL
DATABASE_URL='postgres://username:password@host:port/database?sslmode=require'

# Cloudinary configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
NEXT_PUBLIC_CLOUDINARY_API_SECRET=your_cloudinary_api_secret

```

Make sure to replace the placeholder values with your actual credentials.

### 4. Run the App

Once the environment is set up, you can start the development server:

```bash
For npm:
npm run dev

For yarn:
yarn dev

The app will run at http://localhost:3000.
```

### Deployment

This app is currently deployed on Vercel. To deploy your own version, follow these steps:

Push your code to GitHub.
Link your repository with Vercel.
Add the same environment variables in the Vercel dashboard.
Deploy the app.
Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License

```bash
This project is licensed under the MIT License. See the LICENSE file for details.

Now you can simply copy and paste this into your project! Let me know if you need any
```
