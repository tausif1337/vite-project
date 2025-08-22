import { useContext } from "react";
import UserContext from "../context/UserContext";

function Welcome() {
    const user = useContext(UserContext);
    return (
        <h1>Welcome {user}</h1>
    )
}
export default Welcome;