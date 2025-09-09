import { useParams } from "react-router-dom";

const BlogPost = () => {

  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post: {id}</h1>
      <p>This page is dynamically rendered based on the blog post ID.</p>
    </div>
  );
};

export default BlogPost;


