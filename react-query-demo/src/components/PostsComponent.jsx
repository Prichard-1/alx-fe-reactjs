import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery(["posts"], fetchPosts, {
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    cacheTime: 1000 * 60 * 10, // garbage collection after 10 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  // Ensure data exists and is an array
  if (!data || !Array.isArray(data)) return <p>No posts available</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Refetch Posts
      </button>
      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id} className="border p-2 rounded shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

