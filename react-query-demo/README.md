React Query Demo

This project demonstrates advanced data handling in React using React Query.
It fetches posts from the JSONPlaceholder API and showcases caching, refetching, and efficient state management.

🚀 Project Setup

Clone the repository and install dependencies:

git clone <your-repo-url>
cd react-query-demo
npm install
npm run dev


Open http://localhost:5173
 in your browser.

📂 Project Structure
react-query-demo/
├── src/
│   ├── components/
│   │   └── PostsComponent.jsx   # Fetches posts using React Query
│   ├── App.jsx
│   └── main.jsx                 # QueryClientProvider setup
├── package.json
└── README.md

📝 Features
1. Data Fetching with React Query

Uses useQuery to fetch posts from https://jsonplaceholder.typicode.com/posts.

Automatically handles loading and error states.

2. Caching

Data is cached for 5 minutes (staleTime) to avoid unnecessary network requests.

Navigating away and returning uses the cached data instantly.

3. Manual Refetch

“Refetch Posts” button triggers a fresh fetch, demonstrating React Query’s ability to update data on demand.

4. Performance Optimization

Reduces repeated API calls by leveraging caching.

Handles background updates smoothly without blocking the UI.

🛠 Tech Stack

React + Vite

React Query (@tanstack/react-query)

JSONPlaceholder API

🔍 Testing & Verification

Open the app → posts should appear.

Click Refetch Posts → network request is triggered, data updates.

Navigate away and return → cached posts load instantly.

Check React Developer Tools → see React Query cache and active queries.
