import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post: {postId}</h1>
      <p>This page is dynamically rendered based on the post ID.</p>
    </div>
  );
};

export default BlogPost;

