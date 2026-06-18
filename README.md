# Kidrove Workshop Landing Page

A complete full-stack web application built for the Kidrove Workshop assignment.

## Tech Stack
*   **Frontend**: React, TypeScript, Vite, Tailwind CSS v4, React Hook Form, Zod
*   **Backend**: Node.js, Express, TypeScript, Mongoose, Zod

## Extra Credit Features Implemented
✅ **TypeScript** used heavily across frontend and backend for type safety.
✅ **Tailwind CSS v4** for modern, responsive, aesthetic styling.
✅ **Form Validation** with Zod + React Hook Form (client-side) and Zod (server-side).
✅ **Loading States** implemented (Processing spinner, success state UI).
✅ **Clean Git Commits** with organized files.
✅ **Deployment Ready** for Vercel/Netlify.

---

## How to Deploy to Vercel (For Full Credits)

To get your deployment extra credits, follow these simple steps to deploy the frontend to Vercel for free:

1. Push this repository to your GitHub account.
2. Log in to [Vercel](https://vercel.com) and click **Add New...** > **Project**.
3. Import your GitHub repository.
4. **CRITICAL STEP**: In the "Configure Project" section, set the **Root Directory** to `frontend` by clicking "Edit".
5. Click **Deploy**. Vercel will automatically detect Vite and build your app!

*(Optional Backend Deployment)*: You can deploy the `backend` folder similarly to a platform like Render.com (using `npm install` and `npm start` commands). Once deployed, add a `VITE_API_URL` environment variable in your Vercel settings pointing to the Render URL (e.g. `https://your-backend.onrender.com/api/enquiry`) to connect the two!

## Local Setup

### 1. Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:5173`.

### 2. Backend
```bash
cd backend
npm install
npx ts-node src/server.ts
```
Runs at `http://localhost:5000`. 
*Note: If you don't have MongoDB installed locally, the backend will gracefully fall back to "mock mode" so you can still test the form submission UI!*
