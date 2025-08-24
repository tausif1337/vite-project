import { useNavigate } from 'react-router-dom';

function GoBackButton() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}
export default GoBackButton;