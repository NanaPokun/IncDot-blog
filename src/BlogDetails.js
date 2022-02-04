import { useHistory, useParams } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const redirectHistory = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            redirectHistory.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isLoading &&<div>Loading...</div>}
            { error &&<div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleDelete }>Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;