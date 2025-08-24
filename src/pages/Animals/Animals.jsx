import { Outlet, Link } from "react-router-dom";

function Animals() {
    return (
        <div>
            <h1>This is the Animals page</h1>
            <nav>
                <Link to="/animals">Animals</Link>
                <br />  
                <Link to="/animals/cats">Cat</Link>
                <br />
                <Link to="/animals/dogs">Dog</Link>
                <br />
            </nav>
            <Outlet />

        </div>
    );
}
export default Animals;