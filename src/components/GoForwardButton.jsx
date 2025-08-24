import { useNavigate } from 'react-router-dom';

function GoForwardButton() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </div>
    )
}
export default GoForwardButton;