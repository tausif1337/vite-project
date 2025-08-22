import { useParams } from "react-router-dom";

function URLParams() {

    const { id } = useParams();
    return <div>I am the URL Params Page <br /> ID: {id}</div>;
}

export default URLParams;