import { useLocation } from 'react-router-dom';

function WhereAmI() {
    const location = useLocation();
    return (
        <div>
            <h1>You are here: {location.pathname}</h1>
        </div>
    )
}
export default WhereAmI;