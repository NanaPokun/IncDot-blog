import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
    
    // const [name, setName] = useState('felix');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div className="home">
            {error && <div> { error } </div>}
            {isLoading && <div>Loading.....</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "felix")} title="YawCode's Blog" handleDelete={handleDelete} />
            <button onClick={() => setName('Yawcodes')}>Change Name</button>
            <p>{ name }</p> */}
        </div>
    );
}
export default Home;