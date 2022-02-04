import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState(''); 
    const [ body, setBody ] = useState('');
    const [ author, setAuthor] = useState('felix');
    const [ isLoading, setIsLoading ] = useState(false);
    const redirectHistory = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author};

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsLoading(false);
            // redirectHistory.go(-1);
            redirectHistory.push("/");
        })
    }


    return (
        <div className="create">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={ (e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="felix">felix</option>
                    <option value="osei">osei</option>
                </select>
                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button>Please wait...</button> }
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
    );
}
 
export default Create;
