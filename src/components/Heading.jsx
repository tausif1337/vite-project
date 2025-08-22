import { useContext } from "react";
import UserContext from "../context/UserContext";

function Heading() {
    const heading = useContext(UserContext);
    return (
        <h1>Heading {heading}</h1>
    )
}
export default Heading;