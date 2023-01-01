import useAxios from "../../hooks/useAxios";


function Blog() {
    const data = useAxios("http://localhost:8000/blogs");
    return (
        <h1>Blog Page</h1>
    );
}

export default Blog;