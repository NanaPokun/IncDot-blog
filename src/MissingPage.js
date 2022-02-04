import { Link } from "react-router-dom";

const MissingPage = () => {
    return (
        <div className="missing-page">
            <h2>Sorry</h2>
            <p>Page does not exist</p>
            <Link to="/">Back to Homepage..</Link>
        </div>
    );
}
 
export default MissingPage;